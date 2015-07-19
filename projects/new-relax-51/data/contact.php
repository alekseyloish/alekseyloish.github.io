<?php

/*
 * SimpleModal Contact Form
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2009 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: contact-dist.php 254 2010-07-23 05:14:44Z emartin24 $
 *
 */

// User settings
$to = "email@email.com";

// Process
$action = isset($_POST["action"]) ? $_POST["action"] : "";
if (empty($action)) {
	// Send back the contact form HTML
	$output = "<div style='display:none'>
	<div class='contact-top'></div>
	<div class='contact-content'>
		<form action='data/contact.php' method='post' style='display:none'>
			
            <label for='contact-phone' class='phone'>Ваш телефон:</label>
			<input type='text' id='contact-phone' class='contact-input phone' name='phone' tabindex='101' />
            
			<button type='submit' class='contact-send contact-button' tabindex='102'>Перезвоните мне по указанному номеру</button>
			<br/>
			<input type='hidden' name='token' value='" . smcf_token($to) . "'/>
		</form>
        <div class='contact-message' style='display:none'></div>
        <h1 class='contact-title'></h1>
        <h1 class='contact-title-h'>Закажите обратный звонок - мы подберем Вам наилучший вариант отдыха и мастера по программе релаксации.</h1>
        <div class='contact-loading' style='display:none'></div>
	</div>
</div>";

	echo $output;
}
else if ($action == "send") {
	// Send the phone
	
	$phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
	$token = isset($_POST["token"]) ? $_POST["token"] : "";

	// make sure the token matches
	if ($token === smcf_token($to)) {
		smcf_send($phone);
		echo "Ваша заявка принята!";
	}
	else {
		echo "К сожалению, ваша заявка не принята...";
	}
}

function smcf_token($s) {
	return md5("smcf-" . $s . date("WY"));
}

// Validate and send email
function smcf_send($phone) {
	global $to;

	// Filter and validate fields
	
	$phone = smcf_filter($phone);
    $subject = 'Новая заявка от: '.$phone.'';


	// Set and wordwrap message body
	$body = "Клиент оставил заявку на звонок\n\n";
    
	$body .= "Перезвоните клиенту по номеру: $phone\n\n";
    $body = wordwrap($body, 200);
    
	$headers = "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/plain; charset=utf-8\n";
	$headers .= "Content-Transfer-Encoding: quoted-printable\n";

	// Send email
	@mail($to, $subject, $body, $headers) or 
		die("Unfortunately, a server issue prevented delivery of your message.");

}

// Remove any un-safe values to prevent email injection
function smcf_filter($value) {
	$pattern = array("/\n/","/\r/","/content-type:/i","/to:/i", "/from:/i", "/cc:/i");
	$value = preg_replace($pattern, "", $value);
	return $value;
}

exit;

?>