const {openai} = require('../config/config');

const dialogo = [];

const getCaso = async(req, res) => {
    const prompt = req.query;
    console.log(prompt)
    try{
        // const completion = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: `Dado este caso de juicio oral sobre el caso: La acusación sostiene que el acusado, José Armando, cometió un robo a mano armada en una estación de gasolina local. Según la acusación, José entró a la estación de gasolina con un arma y amenazó al empleado, exigiendo que le entregara todo el dinero en la caja registradora. Después de que el empleado le entregara el dinero, José huyó del lugar en un vehículo que había estacionado fuera de la estación de gasolina. Cuando te envie la palabra "Juez" simulará la respuesta del juez, en dado caso que el juez se dirija al abogado defensor generaras la respuesta automáticamente del abogado defensor, cuando te diga la palabra "Defensor" simularas la respuesta del abogado defensor, en cambio cuando te mande la palabra "Fiscal: " procesaras la respuesta que te mande y generaras una respuesta del juez o del abogado defensor.`,
        //     max_tokens: 450
        // });
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Dado este caso de juicio oral sobre el caso: La acusación sostiene que el acusado, José Armando, cometió un robo a mano armada en una estación de gasolina local. Según la acusación, José entró a la estación de gasolina con un arma y amenazó al empleado, exigiendo que le entregara todo el dinero en la caja registradora. Después de que el empleado le entregara el dinero, José huyó del lugar en un vehículo que había estacionado fuera de la estación de gasolina. Cuando te envie la palabra "Juez" simulará la respuesta del juez, en dado caso que el juez se dirija al abogado defensor generaras la respuesta automáticamente del abogado defensor, cuando te diga la palabra "Defensor" simularas la respuesta del abogado defensor, en cambio cuando te mande la palabra "Fiscal: " procesaras la respuesta que te mande y generaras una respuesta del juez o del abogado defensor. No generes ninguna conversacion cuando al "Fiscal" le toque hablar deberas esperar a que se te mande una respuesta". Si es turno del fiscal espera la respuesta`,
            max_tokens: 3500,
            temperature: 0,
          });
        dialogo.push(response.data.choices[0].text);
        console.log(dialogo);
        res.send(response.data.choices[0].text);
    }catch(err){
        res.send(err);
    }
}

const postCaso = async(req, res) => {
    const {promp} = req.query;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${promp}`,
        max_tokens: 3500,
        temperature: 0,
      });
    res.send(response.data.choices[0].text);
}

module.exports = {
    getCaso,
    postCaso
}