pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        echo "1️⃣ Checking out source code..."
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo "2️⃣ Installing dependencies..."
        sh 'npm install'
      }
    }

    stage('Build and Test') {
      steps {
        echo "3️⃣ Building and testing project..."
        sh 'npm run build'
        sh 'npm test'
      }
    }

    stage('Archive Artifact') {
      steps {
        echo "4️⃣ Archiving build artifacts..."
        sh 'mkdir -p artifact && cp -r dist artifact/'
        archiveArtifacts artifacts: 'artifact/**', fingerprint: true
      }
    }
  }

  post {
    success {
      echo "✅ Pipeline completed successfully!"
    }
    failure {
      echo "❌ Pipeline failed! Please check the logs."
    }
  }
}
