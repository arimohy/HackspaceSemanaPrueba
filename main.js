const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

function getTime(){
	const tiempo = new Date();
    //segundos
	const segundos =tiempo.getSeconds();
	const sgrado = 90+((segundos / 60) * 360);
	segundo.style.transform = 'rotate('+sgrado+'deg)';
    //minutos
	const minutos = tiempo.getMinutes();
	const mgrado = 90+((minutos / 60) * 360) + ((segundos/60)*6);
	minuto.style.transform = 'rotate('+mgrado+'deg)';
    //horas
	const horas = tiempo.getHours();
	const hgrado = 90+((horas / 12) * 360) + ((minutos/60)*30);
	hora.style.transform = 'rotate('+hgrado+'deg)';
}

setInterval(getTime, 1000);
getTime();