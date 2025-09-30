# Tabletop Adventures Timelines

This is a Jekyll-powered site for creating and displaying timelines for tabletop roleplaying game campaigns. It's designed to be simple to update and is hosted on GitHub Pages.



---

## Local Setup 💻

To run this website on your local machine, you'll need a Ruby development environment. This allows you to see your changes instantly without having to push them to GitHub every time.

1.  **Prerequisites**: Make sure you have **Ruby** and **Bundler** installed. It's highly recommended to use a version manager like `rbenv` to avoid system permission issues.
    * Your project is configured to use **Ruby 3.3.0**. Make sure this version is active.

2.  **Install Dependencies**: Navigate to the project's root folder in your terminal and run this command. It will download and install all the gems (plugins) listed in your `Gemfile.lock`.
    ```bash
    bundle install
    ```

3.  **Run the Server**: Start the Jekyll server with this command:
    ```bash
    bundle exec jekyll serve
    ```

4.  **View Your Site**: Open your web browser and navigate to the server address shown in your terminal, which is usually **`http://1227.0.0.1:4000/`**. The site will automatically refresh whenever you save a file.

---

## How to Add a Campaign 🗺️

Adding a new campaign is a three-step process. For this example, let's add a "Discworld SCP" campaign.

#### 1. Configure the Collection
First, you need to tell Jekyll about the new campaign.
* Open the **`_config.yml`** file.
* Under the `collections:` section, add a new entry for your campaign. The key (`discworld_scp`) will be used for the folder name.
    ```yml
    collections:
      shadowrun_zero:
        # ...
      discworld_scp: # <-- Add this block
        output: true
        title: "Discworld SCP"
        icon: "/assets/images/discworld_scp/icon.png"
    ```

#### 2. Create the Campaign Page
This file creates the main page for the campaign's timeline.
* Go to the **`_pages/`** folder.
* Create a new file named `campaign_discworld_scp.md`.
* Add the following front matter, making sure the `collection` matches the key from `_config.yml` and the `permalink` defines its URL.
    ```yml
    ---
    layout: timeline
    title: "Discworld SCP Timeline"
    collection: discworld_scp
    permalink: /discworld_scp/
    background_image: "/assets/images/discworld_scp/background.jpg" # Optional
    ---
    ```

#### 3. Create the Timeline Folder
This is where all of your session notes will live.

> [!WARNING]
> In the **root** of the project, create a new folder named **`_discworld_scp/`**. **The underscore is required.**

Your new campaign is now set up! The site will automatically add a card for it on the homepage.

#### 4. Create the Image Folder
Each campaign should store all their images for that campaign in the specific folder. This will help if we decide to enhannce the system in the future. Keeping it all contained now means we can use the same name, e.g. `background.jpg`, `icon.png`, etc.

So for our example of a "Discworld SCP" campaign it would be `/assets/images/discworld_scp/`.

> [!NOTE]
> Missing images do not break the site, so put them in as able!

---

## How to Add a Session (Timeline Event) 📝

Each "session" is just a simple Markdown file that represents a single event in your timeline.

1.  **Create a New File**: Go into the collection folder for your campaign (e.g., **`_discworld_scp/`**). Create a new Markdown file (`.md`) for your session.
    * Example: `the-explosion.md`

2.  **Add the Front Matter**: At the very top of the new file, add the required front matter. The `date` is crucial, as it determines the order of events in the timeline (most recent appears at the top). 

    ```yml
    ---
    title: "The Explosion"
    date: 2025-10-12
    ---
    ```
    
> [!WARNING]
> Date must be in the form `YYYY-MM-DD`.

3.  **Write Your Content**: Below the `---`, write your session notes using standard Markdown.
    ```markdown
    The Alchemists' Guild celebrated another successful "unscheduled atmospheric restructuring," which left a 
    surprisingly neat crater where their building used to be. Commander Vimes of the City Watch surveyed the 
    scene, noting that the only thing spreading faster than the soot was the paperwork required to investigate it. 
    
    Ultimately, the Guild's only real crime was managing to vaporize three street food vendors, tragically leaving 
    no one to sell a sausage-in-a-bun to the onlookers.
    ```

Save the file, and it will automatically appear in the correct order on your campaign's timeline page.