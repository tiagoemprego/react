const contentful = require("contentful");

const env = {
    CLIENT: {
        SPACE: 'jargsxeq3u04',
        ACCESS_TOKEN: '2dYzy4WEFfRWF5N3RbFNdo9i0eZOBV0F2okfH3XedE4'
    }
};

const client = contentful.createClient({
    space: env.CLIENT.SPACE,
    accessToken: env.CLIENT.ACCESS_TOKEN
});

export default client;