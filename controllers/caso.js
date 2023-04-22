







const { openai } = require('../config/config');




let INITIAL_PROMPT = `Este es un caso de juicio oral en el que se acusa a José Armando de cometer un robo a mano armada en una estación de gasolina local. La acusación afirma que entró a la estación con un arma, amenazó al empleado y se llevó todo el dinero de la caja registradora antes de huir en un vehículo. Habrá un juez, un abogado defensor y un fiscal involucrados en el juicio. Cuando se mencione la palabra "Juez", se simulará la respuesta del Juez. Cuando se mencione la palabra "Defensor", se simulará la respuesta del  Defensor. Cuando se mencione la palabra "Fiscal", se procesará la respuesta que se envíe y se generará una respuesta del Juez o Defensor. Solo si es el turno del Fiscal será mi siguiente respuesta. Para continuar el dialogo sin la participación del fiscal solo pondré la palabra "PASO"`;

let conversation_history = INITIAL_PROMPT + "\n";
// USERNAME = "USER";
let AI_NAME = "AI";


peticion = async (prompt) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 3500,
            temperature: 0,
        });
        return response.data.choices[0].text;
    } catch (err) {
        return err;
    }
}
handle_input = async (input_str, conversation_history, AI_NAME, USERNAME = 'Fiscal') => {
    /* Updates the conversation history and generates a response using GPT-3. */

    conversation_history += `${USERNAME}: ${input_str}\n`;
    // console.log(conversation_history)
    let message = await peticion(conversation_history);
    conversation_history += `${AI_NAME}: ${message}\n`;
    // console.log(`${AI_NAME}: ${message}`);
    return conversation_history;
}


const postCaso = async (req, res) => {
    const { texto } = req.body;
    // console.log(conversation_history);
    // user_input = input(`${USERNAME}: `);
    // console.log(texto)
    const historialDevuelto = await handle_input(texto, conversation_history, AI_NAME);
    conversation_history = historialDevuelto;
    // let respuesta = await peticion(conversation_history);
    res.send(conversation_history);



    // const prompt = req.query;
    // console.log(prompt)

}

// const postCaso = async(req, res) => {
//     const {promp} = req.query;
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `${promp}`,
//         max_tokens: 3500,
//         temperature: 0,
//       });
//     res.send(response.data.choices[0].text);
// }

module.exports = {
    // getCaso,
    postCaso
}



