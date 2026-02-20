node {
    def appdir = '/var/www/reactjs-app'

    stage('Clean Workspace') {
        echo 'Cleaning Jenkins workspace'
        deleteDir()
    }

    stage('Clone repo') {
        git(
            branch: 'main',
            url: 'https://github.com/arnabroybhowmick/Quiz_Non_Redux.git'
        )
    }

    stage('Deploy to EC2') {
        echo 'Deploying to EC2'
        sh """
            sudo mkdir -p ${appdir}
            sudo chown -R jenkins:jenkins ${appdir}
            rsync -av --delete \
              --exclude='.git' \
              --exclude='node_modules' \
              ${WORKSPACE}/ ${appdir}/
            cd ${appdir}
            npm install
            npm run build
            sudo fuser -k 3000/tcp || true
            npm start
        """
    }
}
