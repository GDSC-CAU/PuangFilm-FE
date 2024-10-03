pipeline {
    agent any
    
    tools {nodejs "Node_version"}
    
    environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
        AWS_PUBLIC_URL = "43.203.237.252"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_token')
        DOCKER_IMAGE = "falconlee236/puangfilm-web"
        DOCKER_TAG = "latest"
    }
    
    stages {
        
        stage('github_clone') {
            steps {
                git branch: 'dev/ci-cd', credentialsId: 'github_token', url: 'https://github.com/falconlee236/PuangFilm-FE-local'
            }
        }
        
        stage('docker-clean-up') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                        sh '''
                        if test "ssh ubuntu@${AWS_PUBLIC_URL} `docker ps -aq --filter ancestor=${DOCKER_IMAGE}`"; then
                        
                        ssh ubuntu@${AWS_PUBLIC_URL} "docker stop $(docker ps -aq --filter ancestor=${DOCKER_IMAGE})"
                        ssh ubuntu@${AWS_PUBLIC_URL} "docker rm -f $(docker ps -aq --filter ancestor=${DOCKER_IMAGE})"
                        ssh ubuntu@${AWS_PUBLIC_URL} "docker rmi ${DOCKER_IMAGE}"

                        fi
                        '''
                    }
                }
                
            }
        }
        
        stage('docker-build'){
            steps {
                script {
                    echo 'Build Docker'
                    sh 'docker compose -f docker-compose.yml build'
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
        
        stage('Docker run') {
            steps {
                script {
                    sh 'docker compose -f docker-compose.yml up -d'
                }
            }
        }

        stage('Docker down') {
            steps {
                script {
                    sh 'docker stop $(docker ps -aq --filter ancestor=${DOCKER_IMAGE})'
                    sh 'docker rm -f $(docker ps -aq --filter ancestor=${DOCKER_IMAGE})'
                    sh 'docker rmi ${DOCKER_IMAGE}'
                }
            }
        }

        stage('docker-image-pull') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                        sh 'scp docker-compose.yml ubuntu@${AWS_PUBLIC_URL}:/home/ubuntu'
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"'
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "docker pull ${DOCKER_IMAGE}"'
                        sh 'ssh ubuntu@${AWS_PUBLIC_URL} "docker compose -f docker-compose.yml up -d"'
                    }
                }
                
            }
        }
    }
}

// https://velog.io/@imsooyeon/Jenkins-pipeline%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EC%97%AC-Docker-build-%EB%B0%8F-%EC%9D%B4%EB%AF%B8%EC%A7%80-push-%ED%95%98%EA%B8%B0
// https://teichae.tistory.com/entry/Jenkins-Pipeline%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-Docker-Image-Push