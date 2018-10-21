
exports.login = (req, res) => {

  const {userId, pswd} = req.body;

  const findUserId = (userId, cb) => {

    /* find user id from db */
    const users = require('../../data/users.json');
    let result = null;
    users.forEach(el => {
      if (el.userId === userId) {
        result = { userId: el.userId, pswd: el.pswd };
        return;
      } 
    });

    cb(result);
  };
  
  const verify = (userId, pswd, cb) => {
    findUserId(userId, (result) => {

      if ( null === result ) {
        const err = new Error('userId does not exist.');
        cb(err);
        return;
      } 
      
      if (result.pswd !== pswd) {
        const err = new Error('pswd does not match.');
        cb(err);        
        return;
      } 

      const msg = 'OK';
      cb(msg);
      }
    );
  };

  const p = new Promise(
    (resolve, reject) => {
      verify(userId, pswd, (result) => {
        
        if(result instanceof Error) { 
          reject(result);
          return;
        } 
        resolve(result);
      });
    }
  );

  const respond = (msg) => {
    res.json({
      success: true,
      message: msg
    })
  };

  const onError = (err) => {
    res.status(403).json({
      success: false,
      error: err.message
    });
  };

  p.then(respond).catch(onError);

};

exports.create = (req, res) => {
  res.send('I will create a new user.')
}

exports.show = (req, res) => {
  res.send('I will show your info.')
}

exports.update = (req, res) => {
  res.send('I will update your info.')
}

exports.destory = (req, res) => {
  res.send('I will destory your info.')
}

