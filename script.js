function initSkillsPage () {
    $.ajax('skills.json').done(function(skills) {
        var list = $('#skills-page ul');

        var endorsedBy = skill.endorsedBy;

        if(endorserBy) {
            endorsedBy = `<span class="endorsed">- Endorsed by</span> ${skill.endorsedBy}`
        }
        var result = skills.map(function (skill) {
            return `<li>${skill.name.toUpperCase()} ${skill.endorsements} - ${skill.endorsedBy}</li>`

        })
        list.html(result);
    })
}

function initMeniu() {
    $('#header ul a').click(function(e)) {
        var page = e.target.getAttribute('data-page')
        console.log('click on: ', page);
        $('.page-block').hide();
        $(`#${page}-page`).slideDown();
    }
}

// initSkillsPage();
$('#skills-page').show();