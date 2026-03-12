pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/SanagapalliVarshitha/Jenkinstest.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

    }
}
