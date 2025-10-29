pipeline {
    agent any

    tools {
        nodejs 'NodeJS_20'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '1️⃣ Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '2️⃣ Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build and Test') {
            steps {
                echo '3️⃣ Building and Testing project...'
                sh 'npm run build'
                sh 'npm test'
            }
        }

        stage('Archive Artifact') {
            steps {
                echo '4️⃣ Archiving build artifacts...'
                archiveArtifacts artifacts: 'dist/**', followSymlinks: false
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed! Please check the logs.'
        }
    }
}
