<h1 hidden>
    <?php
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    $strQueries = "\"" . implode("\" \"", $queries) . "\"";
    $result = system("py ai/detector.py " . $strQueries);
    ?>
</h1>
<?php
    $output = "";
	for($i=0; $i<strlen($result); $i++){
        if($result[$i] == "[") continue;
        if($result[$i] != "]") $output .= $result[$i];
        else{
            if ($output < 0.2) echo 0;
            else echo 1;
            $output = "";
            $i++;
        }
    }?>
