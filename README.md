Schema:
https://drive.google.com/file/d/1ZEx9gmbQdgiOGQtXB2nr0ovRRA6ft3Pj/view?usp=sharing

Wireframe:
https://www.figma.com/file/Ru4wXyFKdDKBWKkrhuiROp/Untitled?node-id=0%3A1

## Technology Stack & Tools

[Hop Hop] Array implements the NERDS (Node, Express, React, Database using SQL) stack. Each technology was specifically selected to complement and enhance the web application.

**Backend**
PosgreSQL is one of the most popular relational databases. It allowed us to effectively create the association between the user and algorithm models. This was necessary in order to store information on the specific code each user submits for each algorithm.

Express was selected because of its RESTful API. This allows [Hop Hop] Array to handle the load of requests and responses created every time a user attempts to submit code and the pass and fail results are returned.

**Frontend**
React Redux was used to manage our applications state. This was beneficial to store user information in the state as a logged in user navigated through the website and attempted/ completed algorithms. In addition, this declarative class driven approach allowed the team to efficiently manage our frontend components.

**Other Technologies**
Docker was a key part of our web application that provided necessary security. Every time a user submits code, a new Docker container is created with that code, along with the corresponding Mocha test specs. The user code is run against the test specs in that Docker container and the pass and fail results are returned. The Docker container protects our server if a user were to submit malicious code, as the user code is being run in an isolated environment.

![Image](https://lh3.googleusercontent.com/9a0k25u3TA_PXHkDHCUUS3HASN0AwcBD1EuOYVJ_UDtsS4Qe_4cow84mB8tJro0eqKSwgVSHxQSXWEiU2Zq56E2-WqaPmN29YJhFcwaw8AvPzgvLz2c446Ddpo9_cDqWq3wqtYoceP0Ni17C26ssJYxOCCY2H-xXMpJBbEIANxS_zVePL56J_9tlhH_WOpeXcdJ8G0gIJS_rM9jXMlNFeqgLSw3w7ICTQvBRf4Z6baX0vZDpjTyhylzxjMzcsuvnMQJXufsByyq6WHA8JWGP6STinxwLPyAXRhM9SHXRdsA-Ar72rf8mcTKv1PnqFBYIbMtlxQpScId3Kkfn1p5dNduO7mpGiba7cHywOznVWwPcOdC6Y3XY9-lEPXD-b5z97LM-ucw0Pu1ShLNM3KRN6UzhAEHpvn81NGVmy-A6IqbB41nf1jCO2kc9Y0SPDpFOJQdWOoytCQklRYSJAg69t29qoB2DSv0VKzfjjKKYuWq_k7GKQioHPYSPPrXPpQxEpyxO8ipkQ5eP2aV0P_bkRgV5voWduelGZrjyNv6H3AaYjlz5ptaeJR16bkrdXXV6FOGcgc6eK2eLzDamF77l8UzmdKjDffdYiovJgYPCRj5KZ5j96LO6RJ_aEHb4gjCyUt4RC2WfQWDv9o2GdCR4zwBdEBumzw18KrYnj5uZWuXLypg=w960-h540-no)
