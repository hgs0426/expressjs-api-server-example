exports.login = (req, res) => {

    console.log(req.body);

    res.send('I will serve you jwt.');
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
