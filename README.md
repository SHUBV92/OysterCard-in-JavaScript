## OysterCard 

# Language: JavaScript 


# User Stories

- As a User 
* So I can travel 
* I want to top up my card 


- As a User 
* So I know how much my journey cost
* I want to be able to withdraw my balance 

- As a User 
* So I my oyster card charge me the correct fare 
* I want to be able to register the station I touched in and touched out at 

- As a User 
* So I don’t get charged a penalty fare 
* I want the oyster card to give me a warning when my balance is 0 

## BlackBox 

* touch in      => register entry station 
* touch out    => change station and register exit station 
* Balance 0 = > throw error when touch in
* Balance 0 => throw error cannot withdraw 
* Not Touched out => Raise Penality