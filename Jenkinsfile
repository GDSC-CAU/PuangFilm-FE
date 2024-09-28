pipeline {
    agent any
    
    tools {nodejs "Node_version"}
    
    environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
        AWS_PUBLIC_URL = "43.203.237.252"
    }
    
    stages {
        
        stage('gitlab_clone') {
            steps {
                git branch: 'dev/ci-cd', credentialsId: 'github_token', url: 'https://github.com/falconlee236/PuangFilm-FE-local'
            }
        }
        
        stage('docker-clean-up') {
            steps {
                script {
                    sshagent(credentials: ['EC2_SSH']) {
                    
                    sh '''
                    if test "`docker ps -aq --filter ancestor=front`"; then
                    
					ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker stop $(docker ps -aq --filter ancestor=front)"
                    ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker rm -f $(docker ps -aq --filter ancestor=front)"
                    ssh -o StrictHostKeyChecking=no ubuntu@${AWS_PUBLIC_URL} "docker rmi front"

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
                    dir('ico') {
                        script {
                            
                            sh """
                                if ! command -v docker > /dev/null; then
                                    curl -fsSL https://get.docker.com -o get-docker.sh
                                    sh get-docker.sh
                                fi
                            """
                            
                            sh 'docker compose -f docker-compose.yml build'
                        }
                    }
                }
            }
        }
        
        stage('Docker run') {
            steps {
                dir('ico') {
                    script {
                        sh 'docker compose -f docker-compose.yml up -d'
                    }
                }
            }
        }
    }
}