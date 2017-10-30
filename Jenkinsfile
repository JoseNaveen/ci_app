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
            }
        }
        stage('Deploy') {
            steps {
                sshagent(['854b3f1d-1124-44e1-8698-e00cde25d748']) {
    					echo 'hostname...'
					}
            }
        }
    }
}