const TeamsViewModel = {
    // 1. الداتا الابتدائية
    teamsData: JSON.parse(localStorage.getItem('allTeams')) || [
        { id: 1, name: "فريق النخبة", project: "نظام إدارة مشاريع التخرج", members: "أحمد | سارة | ياسين", status: "مقبول" }
    ],
    
    editingId: null,

    init: function() {
        this.updateHeaderName(); // تحديث الاسم في الهيدر أول ما الصفحة تفتح
        this.render();
        this.bindEvents();
    },

    // ---  تحديث الاسم من الـ LocalStorage ---
    updateHeaderName: function() {
        const savedName = localStorage.getItem('userName');
        const headerName = document.getElementById('userName'); // تأكد إن الـ ID ده موجود في الهيدر في الـ HTML
        if (savedName && headerName) {
            headerName.innerText = savedName;
        }
    },

    prepareForAdd: function() {
        this.editingId = null;
        const form = document.getElementById('addTeamForm');
        if (form) form.reset();
        document.querySelector('#addTeamModal .modal-title').innerText = "إضافة فريق جديد";
    },

    render: function() {
        const tableBody = document.getElementById('teamsTableBody');
        if(!tableBody) return;
        document.getElementById('totalTeamsCount').innerText = this.teamsData.length;
        
        let rows = "";
        this.teamsData.forEach(team => {
            rows += `
                <tr>
                    <td class="fw-bold text-primary">${team.name}</td>
                    <td>${team.project}</td>
                    <td><small class="text-muted">${team.members}</small></td>
                    <td><span class="badge rounded-pill ${this.getStatusBadge(team.status)}">${team.status}</span></td>
                    <td>
                        <div class="d-flex justify-content-center gap-2">
                            <button onclick="window.TeamsViewModel.edit(${team.id})" class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                            <button onclick="window.TeamsViewModel.delete(${team.id})" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>`;
        });
        tableBody.innerHTML = rows;
    },

    getStatusBadge: function(status) {
        return status === 'مقبول' ? 'bg-success' : (status === 'قيد المراجعة' ? 'bg-warning text-dark' : 'bg-danger');
    },

    saveToStorage: function() {
        localStorage.setItem('allTeams', JSON.stringify(this.teamsData));
    },

    delete: function(id) {
        if(confirm("هل أنت متأكد من حذف هذا الفريق؟")) {
            this.teamsData = this.teamsData.filter(t => t.id != id);
            this.saveToStorage();
            this.render();
        }
    },

    edit: function(id) {
        const team = this.teamsData.find(t => t.id == id);
        if (team) {
            this.editingId = id;
            document.getElementById('newTeamName').value = team.name;
            document.getElementById('newProjectTitle').value = team.project;
            document.getElementById('newMembers').value = team.members;
            document.querySelector('#addTeamModal .modal-title').innerText = "تعديل بيانات الفريق";
            var myModal = new bootstrap.Modal(document.getElementById('addTeamModal'));
            myModal.show();
        }
    },

    bindEvents: function() {
        const form = document.getElementById('addTeamForm');
        if(!form) return;

        form.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('newTeamName').value;
            const project = document.getElementById('newProjectTitle').value;
            const members = document.getElementById('newMembers').value;

            if (this.editingId !== null) {
                const index = this.teamsData.findIndex(t => t.id == this.editingId);
                if (index !== -1) {
                    this.teamsData[index] = { ...this.teamsData[index], name, project, members };
                }
                this.editingId = null;
            } else {
                this.teamsData.push({ id: Date.now(), name, project, members: members || "غير محدد", status: "قيد المراجعة" });
            }

            this.saveToStorage();
            this.render();
            bootstrap.Modal.getInstance(document.getElementById('addTeamModal')).hide();
            form.reset();
        };
    }
};

window.TeamsViewModel = TeamsViewModel;
document.addEventListener('DOMContentLoaded', () => TeamsViewModel.init());