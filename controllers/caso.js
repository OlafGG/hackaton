const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getCaso = async(req, res) => {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "How are you today?",
      });
      console.log(completion.data.choices[0].text);
    res.status(200).json('Iniciar conversacion');
}

module.exports = {
    getCaso
}