package com.manideep.crud.exceptions;
import java.util.Date;

public class ErrorDetails {
	private Date time;
	private String message;
	private String URL;
	
	public ErrorDetails(Date time, String message, String URL) {
		super();
		this.time = time;
		this.message = message;
		this.URL = URL;
	}
	
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getURL() {
		return URL;
	}
}