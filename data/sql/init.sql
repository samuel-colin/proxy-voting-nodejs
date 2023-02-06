CREATE TABLE users (
	user_id SERIAL PRIMARY KEY NOT NULL,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);

CREATE TABLE groups (
	group_id SERIAL PRIMARY KEY NOT NULL,
	label VARCHAR ( 255 ) UNIQUE NOT NULL,
	description VARCHAR ( 255 ),
	created_on TIMESTAMP NOT NULL,
	icon VARCHAR ( 50 )
);

CREATE TABLE voting_campaigns (
	camp_id SERIAL PRIMARY KEY NOT NULL,
	label VARCHAR ( 50 ) UNIQUE NOT NULL,
	description VARCHAR ( 1000 ),
	organizer_id INT NOT NULL,
    group_id INT NOT NULL,

	FOREIGN KEY (organizer_id) REFERENCES users (user_id),
	FOREIGN KEY (group_id) REFERENCES groups (group_id)
);

CREATE TABLE voting_campaign_choices (
	choice_id SERIAL PRIMARY KEY NOT NULL,
	label VARCHAR ( 50 ) UNIQUE NOT NULL,
	description VARCHAR ( 255 ),
	camp_id INT NOT NULL,

	FOREIGN KEY (camp_id) REFERENCES voting_campaigns (camp_id)
);

CREATE TABLE vote (
	vote_id SERIAL PRIMARY KEY NOT NULL,
	choice_id INT NOT NULL,
	user_id INT NOT NULL,
	delegate_user_id INT,

	FOREIGN KEY (choice_id) REFERENCES voting_campaign_choices (choice_id),
	FOREIGN KEY (user_id) REFERENCES users (user_id),
	FOREIGN KEY (delegate_user_id) REFERENCES users (user_id)
);

CREATE TABLE delegation (
	delegation_id SERIAL PRIMARY KEY NOT NULL,
	user_id INT NOT NULL,
	delegate_user_id INT,
	camp_id INT NOT NULL,

	FOREIGN KEY (user_id) REFERENCES users (user_id),
	FOREIGN KEY (delegate_user_id) REFERENCES users (user_id),
	FOREIGN KEY (camp_id) REFERENCES voting_campaigns (camp_id)
);

CREATE TABLE groups_users (
	group_user_id SERIAL PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    group_id INT NOT NULL,

	FOREIGN KEY (user_id) REFERENCES users (user_id),
	FOREIGN KEY (group_id) REFERENCES groups (group_id)
);