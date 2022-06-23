if (document.documentElement.clientWidth < 1280) {

    
    document.getElementById('image').onclick = function() {
        document.getElementById('image').classList.remove('gut');
        document.getElementById('image').classList.add('none');
        document.getElementById('text').style.display = "block";
        document.getElementById('span').style.display = "none";
    }

    document.getElementById('text').onclick = function() {
        document.getElementById('text').style.display = "none";
        document.getElementById('image').classList.add('gut');
        document.getElementById('span').style.display = "block";
    }




    document.getElementById('image-1').onclick = function() {
        document.getElementById('image-1').classList.remove('gut');
        document.getElementById('image-1').classList.add('none');
        document.getElementById('text-1').style.display = "block";
        document.getElementById('span-1').style.display = "none";
    }

    document.getElementById('text-1').onclick = function() {
        document.getElementById('text-1').style.display = "none";
        document.getElementById('image-1').classList.add('gut');
        document.getElementById('span-1').style.display = "block";
    }



    document.getElementById('image-2').onclick = function() {
        document.getElementById('image-2').classList.remove('gut');
        document.getElementById('image-2').classList.add('none');
        document.getElementById('text-2').style.display = "block";
        document.getElementById('span-2').style.display = "none";
    }

    document.getElementById('text-2').onclick = function() {
        document.getElementById('text-2').style.display = "none";
        document.getElementById('image-2').classList.add('gut');
        document.getElementById('span-2').style.display = "block";
    }



    document.getElementById('image-3').onclick = function() {
        document.getElementById('image-3').classList.remove('gut');
        document.getElementById('image-3').classList.add('none');
        document.getElementById('text-3').style.display = "block";
        document.getElementById('span-3').style.display = "none";
    }

    document.getElementById('text-3').onclick = function() {
        document.getElementById('text-3').style.display = "none";
        document.getElementById('image-3').classList.add('gut');
        document.getElementById('span-3').style.display = "block";
    }
}






