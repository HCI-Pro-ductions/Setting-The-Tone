<body>
	<header>Sarcasm Detector Test</header>
	<form action="test.php" method="get">
		  <input name="sentence" type="text" placeholder="Key in sentence">
		  <input name="form_submitted" type="hidden" value="1">
  		<input name="submit" type="submit" value="GO!">
  	</form>	
</body>

<h2>Result</h2>
<p hidden>
    <?php
    $result = system("py ai/detector.py \"" . $_GET['sentence']. "\"");
    ?>
</p>
<p>
    <?php
    echo "Sentence: " . $_GET['sentence'] . "<br>";
    echo $result
    ?>
</p>