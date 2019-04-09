const API_ROOT = 'http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000';

//REGISTRO
/*POST /register se usa para registar nuevo usuario
Används för att skapa en ny användare. En email-adress och ett lösenord behöver
skickas. */
//axios.post(API_ROOT + ‘/register’, { email, password });
/**/
/**/


//LOGA IN, SI OK DEVIULEVE UN TOKEN
/*POST /auth
Används för att logga in. Om email och lösenord är giltiga kommer den att svara med
en JWT-token
Exempel
axios.post(API_ROOT + ‘/auth’, { email, password });*/


// GET DE LISTA, PERO SE SOLICITA CON EL TOKEN OBTENIDO
/*
//axios.get(API_ROOT + ‘/todos’, {
 headers: {
 Authorization: ‘Bearer ‘ + token,
 },
});
*/

/*POST /SE USA PARA GENERAR UN NUEVA ITEM EN LA LISTA
Används för att skapa en ny todo. Ett objekt med en nyckel “content” måste skickas.
Exempel
axios.post(API_ROOT + ‘/todos’, { content: ‘Water the
plants’ }, options);*/
/*
//DELETE /todos/:id
Används för att ta bort ett todo-element*/
