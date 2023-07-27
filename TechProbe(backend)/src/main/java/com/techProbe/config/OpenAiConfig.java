package com.techProbe.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
@ConfigurationProperties(prefix = "openai")
public class OpenAiConfig {

	 private String apiKey;
	    private String apiUrl;

	    public void setApiKey(String apiKey) {
	        this.apiKey = apiKey;
	    }

	    public void setApiUrl(String apiUrl) {
	        this.apiUrl = apiUrl;
	    }

	    @Bean
	    public RestTemplate restTemplate() {
	        RestTemplate restTemplate = new RestTemplate();
	        restTemplate.getInterceptors().add((request, body, execution) -> {
	            request.getHeaders().add("Authorization", "Bearer " + apiKey);
	            return execution.execute(request, body);
	        });
	        return restTemplate;
	    }
}
