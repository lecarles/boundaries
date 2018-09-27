var fence;
var content;
var isInside = false;

function preload(){
	fence = new geoFence(lat, lon, radius, insideTheFence, outsideTheFence, 'km');
}

function setup() {
    //document.getElementById('content').style.visibility = 'hidden';
    content = document.getElementById('content').innerHTML;
    document.getElementById('content').innerHTML = `
                <div class="project" id="first">
                    <h2>CHECKING LOCATION</h2>
                    
                </div>
                <h4>Please allow location access on your device.</h4>`;
}



function insideTheFence(position){
    if (!isInside) {
        document.getElementById('content').innerHTML = content;
        isInside = true;
    } 
}

function outsideTheFence(position) {
    document.getElementById('content').innerHTML = `
                <div class="project" id="first">
                    <h2>KEEP GOING!</h2>
                    
                </div>
                <h4>You are not there yet! You are `+(calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(3)*1000)+` meters away.</h4>`;
    isInside = false;
}


