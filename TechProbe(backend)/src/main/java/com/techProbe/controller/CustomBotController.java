package com.techProbe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.techProbe.dto.ChatGPTRequest;
import com.techProbe.dto.ChatGptResponse;

@RestController
@RequestMapping("/bot")
public class CustomBotController {
	 @Value("${openai.model}")
	    private String model;
	  @Value(("${openai.api.url}"))
	    private String apiURL;
	    @Autowired
	    private RestTemplate restTemplate;

	    @GetMapping("/chat")
	    public ResponseEntity<String> chat(@RequestParam("prompt") String prompt) {
	        try {
	            ChatGPTRequest request = new ChatGPTRequest(model, prompt);
	            ChatGptResponse chatGptResponse = restTemplate.postForObject(apiURL, request, ChatGptResponse.class);
	            if (chatGptResponse != null && !chatGptResponse.getChoices().isEmpty()) {
	                return ResponseEntity.ok(chatGptResponse.getChoices().get(0).getMessage().getContent());
	            } else {
	                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get a valid response.");
	            }
	        } catch (HttpClientErrorException e) {
	            return ResponseEntity.status(e.getRawStatusCode()).body(e.getResponseBodyAsString());
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
	        }
	    }
}
