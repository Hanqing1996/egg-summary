'use strict';
const path=require('path');

module.exports=app=>{
    const modelPaths=app.loader.getLoadUnits().map(unit=>path.join(unit.path,'app/model'));
    app.loader.loadToContext(modelPaths,'model')
}

module.exports=app=>{
    app.loader.loadToApp(path.join(app.config.baseDir,'app/error'),'error',{
        caseStyle:'upper'
    })
}

