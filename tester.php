<h1 hidden>
    <?php
    $result = system("python3 /var/www/html/Setting-The-Tone/ai/detector.py \"" . $_GET['sentence']. "\"");
    ?>
</h1>
<p><?php
    $output = "";
    for($i=0;$i<strlen($result);$i++){
	    if($result[$i] == "["){
		    $i+=2;
		    while($i<strlen($result) && $result[$i] != "]"){
			    $output .= $result[$i];
			    $i++;
		    }
      	    }	
    }
    echo $output;
  ?></p>
