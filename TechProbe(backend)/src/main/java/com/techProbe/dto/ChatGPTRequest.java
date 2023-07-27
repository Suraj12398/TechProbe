package com.techProbe.dto;

import lombok.Data;

@Data
public class ChatGPTRequest {

	  private String model;
	    private String prompt;

	    public ChatGPTRequest(String model, String prompt) {
	        this.model = model;
	        this.prompt = prompt;
	    }
	
}
