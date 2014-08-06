# MoJ People Finder

## Authentication

Authentication requires two environment variables. You can obtain these by
visiting the [Google Developers Console](https://console.developers.google.com/)
and selecting **APIs & auth** from the sidebar, followed by **Credentials**,
then **Create new Client ID**.

Set `GPLUS_CLIENT_ID` to the value of **Client ID** and `GPLUS_CLIENT_SECRET`
to **Client secret**.

You will also need to configure **Consent screen** below for logging in to work.

For local development, you can use a `.env` file; see `.env.sample` for an
example.

The permitted domains are configured in `config/application.rb`.

## Search

Heroku provides [Bonsai Elasticsearch](https://devcenter.heroku.com/articles/bonsai)
as an add-on.

You can install a development version from [Elasticsearch downloads](http://www.elasticsearch.org/download/)
or with a package manager.
e.g. `brew install elasticsearch`.

Elasticsearch requires [jdk version 7 or greater](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

If you get an IndexMissingException, you will need to index the Person model:

`bundle exec rake environment elasticsearch:import:model CLASS='Person' FORCE=y`

Or you can build the index from the console:

`Person.__elasticsearch__.create_index! index: Person.index_name, force: true`
`Person.import`

You can also delete the index:

`Person.delete_indexes`

To run specs without Elasticsearch:

`bundle exec rspec . --tag ~elastic`

## Images

We use [MiniMagick](https://github.com/minimagick/minimagick) so either Imagemagick or Graphicsmagick need to be installed for image manipulation and for some of the tests.

If using brew you can use the following command:

`brew install imagemagick`

## Testing

You'll need to install PhantomJS in order to run the headless browser tests.

`brew install phantomjs`

## Utilities

CI by [Travis](https://travis-ci.org/ministryofjustice/peoplefinder).

Software metrics by [Code Climate](https://codeclimate.com/github/ministryofjustice/peoplefinder)
