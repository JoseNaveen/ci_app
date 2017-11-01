pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
               echo 'Testing..'
               bat 'echo $PATH'
            }
        }
        stage('Deploy') {
            steps {
                sshagent(['854b3f1d-1124-44e1-8698-e00cde25d748']) {
    				sh 'ssh ec2-user@ec2-18-216-108-129.us-east-2.compute.amazonaws.com uname -a'
				}

            }
        }
    }
}