// Take a variable with the **temperature** and another variable with the **relative humidity** and output a **clothing suggestion**.

function temp2clothing(temperature, humidity) {
    if (temperature <= -10) {
        if (humidity <= 15) {
            return "Layer and bundle up to protect from the wind";

        } else if (humidity > 15 && humidity <= 50) {
            return "Dress warmly, it's frosty outside";

        } else if (humidity > 50) {
            return "Chance of snow, wear waterproof jacket and snowboots";
        }

    } else if (temperature > -10 && temperature <= 5) {
        if (humidity <= 15) {
            return "Wear a thick coat and a scarf";

        } else if (humidity > 15 && humidity <= 50) {
            return "Dress warmly!";

        } else if (humidity > 50) {
            return "Chance of flurries, wear waterproof shoes";
        }

    } else if (temperature > 5 && temperature <= 12) {
        if (humidity <= 15) {
            return "It's windy but a jacket will suffice!";

        } else if (humidity > 15 && humidity <= 50) {
            return "Wear a sweater or a hoodie";

        } else if (humidity > 50) {
            return "Wear a raincoat!";
        }

    } else if (temperature > 12 && temperature <= 18) {
        if (humidity <= 15) {
            return "Might not need a jacket or a hoodie, but the wind could make it colder";

        } else if (humidity > 15 && humidity <= 50) {
            return "Light sweater or longsleeves";

        } else if (humidity > 50) {
            return "Bring an umbrella";
        }

    } else if (temperature > 18) {
        if (humidity <= 15) {
            return "Your hat might fly away from the wind";

        } else if (humidity > 15 && humidity <= 50) {
            return "Short sleeves and shorts";

        } else if (humidity > 50) {
            return "Bring an umbrella and don't wear sandals";
        }
    }

}
export { temp2clothing };
