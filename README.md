![](img/makerspacesradar_logo_100.png)

A simple dashboard that shows some analytics about the makerspaces: where they are distributed and the different kinds of labs. This dashboard is completely data-driven, and it is currently under development; it could be interested for any stakeholder interested in having an overview of the makerspaces without the need for developing software or research.

It is an example application of the [makerlabs](https://github.com/openp2pdesign/makerlabs) Python module.

## Docker

This dashboard is a static website at the moment, with packages installed with yarn or npm. If you want to build and run it using docker, you can use the following commands for building and running

build:

```
docker build -t makeit/makerspacesradar .
```

run:

```
docker run -d -p 3500:80 makeit/makerspacesradar
```

The MakerSpaceshRadar will be then accessible at [http://localhost:3500](http://localhost:3500).

## Credits
[![](img/from_30.png)](https://ec.europa.eu/digital-agenda/en/news/22-new-caps-projects-horizon-2020)