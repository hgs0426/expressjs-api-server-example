
exports.login = (req, res) => {

  const {userId, pswd} = req.body;

  if (userId === undefined) {
    return res.status(403).json({
      success: false,
      message: 'userId is undefined'
    });
  }

  if (pswd === undefined) {
    return res.status(403).json({
      success: false,
      message: 'pswd is undefined'
    });
  }

  const find = (userId) => {
    return new Promise((resolve, reject) => {
      /* find user id from db */
      const users = require('../../data/users.json');
      for(let el of users) {
        if (el.userId === userId) {
          resolve({ userId: el.userId, pswd: el.pswd });
          break;
        }
      }
      const err = new Error('userId does not exist.');
      reject(err);
      
    });
  };
  
  const verify = (result) => {
    return new Promise((resolve, reject) => {
     
      if (result.pswd !== pswd) {
        const err = new Error('pswd does not match.');
        return reject(err);        
      } 

      const msg = 'OK';
      resolve(msg);
    });
  };
  
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
  
  /* async-await way */
  /*
  (async () => {
    try {
      const result = await find(userId);
      const msg = await verify(result);
      respond(msg);
    } catch (err) {
      onError(err);
    }
  }) ();
  */
  
  find(userId)
    .then(verify)
    .then(respond)
    .catch(onError);
  
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

