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
                    <h2>PROJECT ONE</h2>
                    <h4>50.941357, 6.958307.</h4>
                </div>
                <p>Please allow location access on your device.</p>`;
}



function insideTheFence(position){
    if (!isInside) {
        document.getElementById('content').innerHTML = content;
        isInside = true;
    } 
}

function outsideTheFence(position) {
    if (isInside) {
        document.getElementById('content').innerHTML = `
                <div class="project" id="first">
                    <h2>PROJECT ONE</h2>
                    <h4>50.941357, 6.958307.</h4>
                </div>
                <p>You are not there yet. You are `+(calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(3)*1000)+` meters away.</p>`;
        isInside = false;
    }
}