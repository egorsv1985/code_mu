$(":header").css("color", "red");
$(":header.zzz").css("color", "red");
$(":header +:header").css("color", "red");
$(":header.test +:header.test").css("color", "red");
