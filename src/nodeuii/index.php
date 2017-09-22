<?php
error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);

class praiseButton {
	public $servername;
	public $username;
	public $password;
	public $dbname;
	public $con = "";

	function __construct($servername, $username, $password, $dbname) {
		$this->servername = $servername;
		$this->username = $username;
		$this->password = $password;
		$this->dbname = $dbname;
	}

	function getSql() {
		try {
			$dsn = "mysql:host=$this->servername;dbname=$this->dbname";
			$this->con = new PDO($dsn, $this->username, $this->password);
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}

	function updatesql($sql) {
		if ($this->con == null) {
			$this->getSql();
		}
		$res = $this->con->exec($sql);
		$this->closesql();
		return $res;
	}

	function cloasesql() {
		$this->con = null;
	}
}

class realConn extends praiseButton {
	function __construct($servername, $username, $password, $dbname) {
		parent::__construct($servername, $username, $password, $dbname);
	}

	function updateRealconn() {
		$sql = "UPDATE thumb SET num = num + 1 WHERE id = 1";
		$res = $this->updatesql($sql);
		if ($res > 0) {
			echo json_encode(array('success' => true, 'message' => '123'));
		} else {
			echo json_encode(array('success' => true, 'message' => '456'));
		}
	}
}

$praisecon = new realConn('localhost', 'root', '', 'yd');
$praisecon->updateRealconn();