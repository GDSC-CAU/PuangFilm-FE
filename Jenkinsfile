pipeline {
    agent any
    
    tools {nodejs "Node_version"}
    
    environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
    }
    
    stages {
        
        stage('gitlab_clone') {
            steps {
                git branch: 'dev/ci-cd', credentialsId: 'Jenkins_token', url: 'https://github.com/falconlee236/PuangFilm-FE-local'
            }
        }
        
        // stage('docker-clean-up') {
        //     steps {
        //         script {
        //             sshagent(credentials: ['ec2_ssh_key']) {
                    
        //             sh '''
        //             if test "`docker ps -aq --filter ancestor=front`"; then
                    
		// 			ssh -o StrictHostKeyChecking=no ubuntu@{ec2 서버 도메인 or IP주소} "docker stop $(docker ps -aq --filter ancestor=front)"
        //             // 이전 컨테이너 삭제
        //             ssh -o StrictHostKeyChecking=no ubuntu@{ec2 서버 도메인 or IP주소} "docker rm -f $(docker ps -aq --filter ancestor=front)"
        //             // 이전 이미지 삭제
        //             ssh -o StrictHostKeyChecking=no ubuntu@{ec2 서버 도메인 or IP주소} "docker rmi front"

        //             fi
        //             '''
        //             }
        //         }
                
        //     }
        // }
        
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
                            
                            sh 'docker-compose -f docker-compose.yml build'
                        }
                    }
                }
            }
        }
        
        stage('Docker run') {
            steps {
                dir('ico') {
                    script {
                        sh 'docker-compose -f docker-compose.yml up -d'
                    }
                }
            }
        }
    }
}