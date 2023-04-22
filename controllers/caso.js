const {openai} = require('../config/config');

const getCaso = async(req, res) => {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "How are you today?",
      });
      const response = completion.data.choices[0].text;
    res.status(200).json({
        response
    });
}

module.exports = {
    getCaso
}