pipeline{
    agent any
    environment{
        VERCEL_TOKEN=credentials('vercel-token')
    }
    stages{
         stage('install'){
            steps{
 bat 'npm install'
            }
           
         }
          stage('Test'){
            steps{
            echo 'Skipping tests no test code found'
            }
         }
          stage('Build'){
           steps{
            bat 'npm run build'
           }
         }
         stage('Deploy'){
            steps{
               bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
         }
    }
}