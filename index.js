function letrehoz()
{
    let igen = document.createElement('div');
    igen.id = "igen";
    document.getElementById('body').appendChild(igen);
    document.getElementById('igen').innerHTML = "";

    let nem = document.createElement('div');
    nem.id = "nem";
    document.getElementById('body').appendChild(nem);

    let input = document.createElement('input');
    input.setAttribute('type' , 'number');
    input.id = "szam";
    document.getElementById('igen').appendChild(input);

    let b1 = document.createElement('button');
    b1.setAttribute("onclick" , "szamol()");
    b1.innerHTML = "SZÁMOL";
    document.getElementById('igen').appendChild(b1);

    let b2 = document.createElement('button');
    b2.setAttribute("onclick" , "torol()");
    b2.innerHTML = "TÖRÖL";
    document.getElementById('igen').appendChild(b2);
}

function szamol()
{
    let szam = document.getElementById('szam').value;
    let lista = [];
    let hlista = "";
    lista[0] = +szam;
    for(let i = 0; i < 10; i++)
    {
        lista[i] = +szam +(i * 3);
        if(lista[i] % 2 == 0)
        {
            hlista += '<li class="zold">' + lista[i] + '</li>';
        }
        else
        {
            hlista += '<li class="piros">' + lista[i] + '</li>';
        }
    }
    document.getElementById('nem').innerHTML += hlista;
}

function torol()
{
    document.getElementById('nem').innerHTML = "";
}