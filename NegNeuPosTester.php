<h1 hidden>
    <?php
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    $strQueries = "\"" . implode("\" \"", $queries) . "\"";
    $result = system("py ai/detector.py " . $strQueries);
    ?>
</h1>
<?php
for($i=0; $i<strlen($result); $i++) echo $result[$i];
?>
