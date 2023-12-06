function skillsMember() {
    // TODO: Implement the skillsMember function
    return{
        restrict: 'E',
        templateUrl: 'templates/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}

