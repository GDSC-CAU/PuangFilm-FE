pipeline {
    agent any
    
    tools {nodejs "Node_version"}
    
    environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
        AWS_PUBLIC_URL = "43.203.237.252"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_token')
        DOCKER_IMAGE = "falconlee236/puangfilm-web"
        CONTAINER_NAME = "puangfilm-web"
    }
    
    stages {
        
        stage('github_clone') {
            steps {
                git branch: 'dev/ci-cd', credentialsId: 'github_token', url: 'https://github.com/falconlee236/PuangFilm-FE-local'
            }
        }

        stage('env file copy') {
            steps {
                script {
                    sh "cp /var/jenkins_home/env/.env.local ."
                }
            }
        }
        
        
        stage('docker-build'){
            steps {
                script {
                    echo 'Build Docker'
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('dockerhub-login') {
            steps {
                script {
                    sh 'echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin'
                }
            }
        }

        stage('Deploy image') {
            steps {
                script {
                    // 태그를 달아서 한 레포에 2개 이상 이미지를 배포할 수 있음
                    // sh 'docker image tag $DOCKER_REPO $DOCKER_REPO:$BUILD_NUMBER'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('docker-image-pull') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"'
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "docker pull ${DOCKER_IMAGE}"'
                    }
                }
                
            }
        }

        stage('docker-clean-up') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                        sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker stop $CONTAINER_NAME"
                        ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker rm -f $CONTAINER_NAME"
                        ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker image prune --force --all"
                        '''
                    }
                }
                
            }
        }

        stage('docker-start') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "docker run -p 3030:3030 --name $CONTAINER_NAME -d ${DOCKER_IMAGE}"'
                    }
                }
                
            }
        }
    }
}