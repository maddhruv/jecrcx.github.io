function getEl(id, value){
    document.getElementById(id).innerHTML += (value);
}
	var results=[];
	var id = window.location.href;
	id = id.substring(55, id.length);
	for (var i=0 ; i < st.length; i++)
	{
	    if (st[i].chooseYourUsername == id) {
	        break;
	    }
	}
	var name = st[i].fullName;
	var img = st[i].photoUrl;
	var branch = st[i].branch;
	var email = st[i].emailAddress;
	//var dob = st[i].dateOfBirth;
	var color = st[i].chooseYourProfileColorPreference;
	dob = "Date of Birth: "+dob;
	email = '<a href="mailto:'+email+'">'+email+'</a>';
	var image = '<img src="'+img+'" height="200px" style="border: 10px solid white;" class="hoverable"/>';
	var pColor = document.getElementById('colorP');
		pColor.className += color;
	getEl('name', name);
	getEl('branch', branch);
	getEl('img', image);
	getEl('email', email);
	//getEl('dob', dob);
