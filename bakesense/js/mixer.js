
    function mixer() {
        
        var f_checkBox = document.getElementById("flour");
        var s_checkBox = document.getElementById("sugar");
        var b_checkBox = document.getElementById("butter");
        var e_checkBox = document.getElementById("eggs");
        
        //easier to read
        f = f_checkBox.checked 
        s = s_checkBox.checked 
        b = b_checkBox.checked 
        e = e_checkBox.checked 
        
        // singles
        var f_text = document.getElementById("f-text");
        var s_text = document.getElementById("s-text");
        var b_text = document.getElementById("b-text");
        var e_text = document.getElementById("e-text");
        // doubles
        var fs_text = document.getElementById("fs-text");
        var fb_text = document.getElementById("fb-text");
        var fe_text = document.getElementById("fe-text");
        var sb_text = document.getElementById("sb-text");
        var se_text = document.getElementById("se-text");
        var be_text = document.getElementById("be-text");
        // triples
        var fsb_text = document.getElementById("fsb-text");
        var fse_text = document.getElementById("fse-text");
        var fbe_text = document.getElementById("fbe-text");
        var sbe_text = document.getElementById("sbe-text");
        // quad
        var fsbe_text = document.getElementById("fsbe-text");
        
        var empty_text = document.getElementById("empty-text"); 
        
        
        if (f == true){
            if (s == true){
                if (b == true){
                    if (e == true){
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "block";
                        
                        empty_text.style.display = "none";
                    } else {
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "block";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                    
                } else { //fs no b
                    if (e == true){
                        //fse
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "block";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //fs
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "block"; 
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                }
                
            } else { //f no s
                if (b == true){
                    if (e == true){
                        //fbe
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "block"; 
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //fb
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "block"; 
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                    }
                    
                } else { //f no s no b
                    if (e == true){
                        //fe                
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "block"; 
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //f
                        f_text.style.display = "block"; 
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                }
            }
                
        } else { //no f
            if (s == true){
                if (b == true){
                    if (e == true){
                        //sbe                
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "block"; 
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //sb
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "block"; 
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                    
                } else { //s no b
                    if (e == true){
                        //se
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "block"; 
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //s              
                        f_text.style.display = "none";
                        s_text.style.display = "block"; 
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                }
                
            } else { // no s
                if (b == true){
                    if (e == true){
                        //be
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "block"; 
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //b
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "block"; 
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    }
                    
                } else { // no s no b
                    if (e == true){
                        //e                
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "block"; 
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "none";
                    } else {
                        //all off
                        f_text.style.display = "none";
                        s_text.style.display = "none";
                        b_text.style.display = "none";
                        e_text.style.display = "none";
                        fs_text.style.display = "none";
                        fb_text.style.display = "none";
                        fe_text.style.display = "none";
                        sb_text.style.display = "none";
                        se_text.style.display = "none";
                        be_text.style.display = "none";
                        fsb_text.style.display = "none";
                        fse_text.style.display = "none";
                        fbe_text.style.display = "none";
                        sbe_text.style.display = "none";
                        fsbe_text.style.display = "none";
                        
                        empty_text.style.display = "block";
                    }
                }
            }    
                
        }
                
                
            
    }