// console.log("text");

let bio;

navitem1 = 'Cipi';
navitem2 = 'Vlad';
navitem3 = '37';
navitem4 = 'Rumänien';
navitem5 = '1,70m';
navitem6 = '58kg';
navitem7 = 'Musik hören, Coden, Golfen';
navitem9 = 'Fifa';
navitem10 = 'Reis';
navitem11 = 'Golfen';
navitem12 = 'Puma';
navitem13 = 'jede Jahreszeit';
navitem14 = 'Gran Canaria';

bio = `Hi zusammen! Mein Name ist ${navitem1} ${navitem2}. Ich bin ${navitem3} jung. Ich stamme ursprünglich aus ${navitem4}. Ich bin c.a. ${navitem5} groß und wiege in etwa ${navitem6}. ${navitem7} sind Hobbys von mir. Außerdem zocke ich gerne ${navitem9} und esse sehr gerne ${navitem10}. Ich bekleide mich gerne mit ${navitem12} - Sachen. Ich genieße ${navitem13} und am liebesten verbringe ich meinen Urlaub auf ${navitem14}.`;
console.log(bio);

document.getElementById('bio').innerHTML = bio;