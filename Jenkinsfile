pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Second') {
      steps {
        build(job: 'debater', wait: true)
      }
    }

  }
}