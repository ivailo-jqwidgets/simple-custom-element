describe('jqx-hoy Custom Element Test', function () {
    it('registerElement is defined', function () {
        expect(document.registerElement).toBeDefined();
    });

    it('children are hidden (in Shadow DOM)', function () {
        // a jqx-hoy element is dynamically appended
        var dynamicElement = document.createElement('div');
        dynamicElement.innerHTML = '<jqx-hoy id="jqxHoy" imgSrc="https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg" imgLabel="Sun2"></jqx-hoy>';
        document.body.appendChild(dynamicElement);
        var jqxHoy = document.getElementById('jqxHoy');

        expect(jqxHoy.children.length).toBe(0);
    });
});