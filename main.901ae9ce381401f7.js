"use strict";
(self.webpackChunktrain = self.webpackChunktrain || []).push([
  [179],
  {
    5456: (je, ce, S) => {
      S.d(ce, { X: () => Me });
      var d = S(433),
        l = S(8256),
        I = S(9082),
        $ = S(9386),
        G = S(5802),
        he = S(3841),
        H = S(6895);
      function ve(q, He) {
        1 & q &&
          (l.TgZ(0, "small"), l._uU(1, " Name cannot be empty"), l.qZA());
      }
      function X(q, He) {
        if (
          (1 & q &&
            (l.TgZ(0, "div", 13), l.YNc(1, ve, 2, 0, "small", 14), l.qZA()),
          2 & q)
        ) {
          const j = l.oxw(2);
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == j.formModal.controls.name.errors
                ? null
                : j.formModal.controls.name.errors.required
            );
        }
      }
      function ye(q, He) {
        1 & q &&
          (l.TgZ(0, "small"),
          l._uU(1, " Description cannot be empty"),
          l.qZA());
      }
      function ie(q, He) {
        if (
          (1 & q &&
            (l.TgZ(0, "div", 13), l.YNc(1, ye, 2, 0, "small", 14), l.qZA()),
          2 & q)
        ) {
          const j = l.oxw(2);
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == j.formModal.controls.description.errors
                ? null
                : j.formModal.controls.description.errors.required
            );
        }
      }
      function Ee(q, He) {
        if (1 & q) {
          const j = l.EpF();
          l.TgZ(0, "div", 4)(1, "form", 5),
            l.NdJ("ngSubmit", function () {
              l.CHM(j);
              const se = l.oxw();
              return l.KtG(se.submit());
            }),
            l.TgZ(2, "div", 6)(3, "label", 7),
            l._uU(4, "Name:"),
            l.qZA(),
            l._UZ(5, "br")(6, "input", 8),
            l.YNc(7, X, 2, 1, "div", 9),
            l.qZA(),
            l.TgZ(8, "div", 6)(9, "label", 10),
            l._uU(10, "Description: "),
            l.qZA(),
            l._UZ(11, "br")(12, "input", 11),
            l.YNc(13, ie, 2, 1, "div", 9),
            l.qZA(),
            l.TgZ(14, "button", 12),
            l._uU(15, "Add board"),
            l.qZA()()();
        }
        if (2 & q) {
          const j = l.oxw();
          l.xp6(1),
            l.Q6J("formGroup", j.formModal),
            l.xp6(6),
            l.Q6J(
              "ngIf",
              j.formModal.controls.name.invalid &&
                j.formModal.controls.name.touched
            ),
            l.xp6(6),
            l.Q6J(
              "ngIf",
              j.formModal.controls.description.invalid &&
                j.formModal.controls.description.touched
            ),
            l.xp6(1),
            l.Q6J("disabled", !j.formModal.valid || null);
        }
      }
      function Ie(q, He) {
        1 & q &&
          (l.TgZ(0, "small"), l._uU(1, " Name cannot be empty"), l.qZA());
      }
      function ae(q, He) {
        if (
          (1 & q &&
            (l.TgZ(0, "div", 13), l.YNc(1, Ie, 2, 0, "small", 14), l.qZA()),
          2 & q)
        ) {
          const j = l.oxw(2);
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == j.formModal.controls.name.errors
                ? null
                : j.formModal.controls.name.errors.required
            );
        }
      }
      function Te(q, He) {
        if (1 & q) {
          const j = l.EpF();
          l.TgZ(0, "div", 15)(1, "form", 5),
            l.NdJ("ngSubmit", function () {
              l.CHM(j);
              const se = l.oxw();
              return l.KtG(se.submitEdit());
            }),
            l.TgZ(2, "div", 6)(3, "label", 7),
            l._uU(4, "Name:"),
            l.qZA(),
            l._UZ(5, "br")(6, "input", 8),
            l.YNc(7, ae, 2, 1, "div", 9),
            l.qZA(),
            l.TgZ(8, "button", 12),
            l._uU(9, "Edit board"),
            l.qZA()()();
        }
        if (2 & q) {
          const j = l.oxw();
          l.xp6(1),
            l.Q6J("formGroup", j.formModal),
            l.xp6(6),
            l.Q6J(
              "ngIf",
              j.formModal.controls.name.invalid &&
                j.formModal.controls.name.touched
            ),
            l.xp6(1),
            l.Q6J("disabled", !j.formModal.controls.name.valid || null);
        }
      }
      function Re(q, He) {
        1 & q &&
          (l.TgZ(0, "small"), l._uU(1, " Name cannot be empty"), l.qZA());
      }
      function We(q, He) {
        if (
          (1 & q &&
            (l.TgZ(0, "div", 13), l.YNc(1, Re, 2, 0, "small", 14), l.qZA()),
          2 & q)
        ) {
          const j = l.oxw(2);
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == j.formModal.controls.name.errors
                ? null
                : j.formModal.controls.name.errors.required
            );
        }
      }
      function Je(q, He) {
        if (1 & q) {
          const j = l.EpF();
          l.TgZ(0, "div", 16)(1, "form", 5),
            l.NdJ("ngSubmit", function () {
              l.CHM(j);
              const se = l.oxw();
              return l.KtG(se.addTask());
            }),
            l.TgZ(2, "div", 6)(3, "label", 7),
            l._uU(4, "Name:"),
            l.qZA(),
            l._UZ(5, "br")(6, "input", 8),
            l.YNc(7, We, 2, 1, "div", 9),
            l.qZA(),
            l.TgZ(8, "button", 12),
            l._uU(9, "Add Task"),
            l.qZA()()();
        }
        if (2 & q) {
          const j = l.oxw();
          l.xp6(1),
            l.Q6J("formGroup", j.formModal),
            l.xp6(6),
            l.Q6J(
              "ngIf",
              j.formModal.controls.name.invalid &&
                j.formModal.controls.name.touched
            ),
            l.xp6(1),
            l.Q6J("disabled", !j.formModal.controls.name.valid || null);
        }
      }
      function vt(q, He) {
        1 & q &&
          (l.TgZ(0, "small"), l._uU(1, " Name cannot be empty"), l.qZA());
      }
      function Pe(q, He) {
        if (
          (1 & q &&
            (l.TgZ(0, "div", 13), l.YNc(1, vt, 2, 0, "small", 14), l.qZA()),
          2 & q)
        ) {
          const j = l.oxw(2);
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == j.formModal.controls.name.errors
                ? null
                : j.formModal.controls.name.errors.required
            );
        }
      }
      function Oe(q, He) {
        if (1 & q) {
          const j = l.EpF();
          l.TgZ(0, "div", 17)(1, "form", 5),
            l.NdJ("ngSubmit", function () {
              l.CHM(j);
              const se = l.oxw();
              return l.KtG(se.editTask());
            }),
            l.TgZ(2, "div", 6)(3, "label", 18),
            l._uU(4, "Name:"),
            l.qZA(),
            l._UZ(5, "br")(6, "input", 8),
            l.YNc(7, Pe, 2, 1, "div", 9),
            l.qZA(),
            l.TgZ(8, "button", 12),
            l._uU(9, "Edit Task"),
            l.qZA()()();
        }
        if (2 & q) {
          const j = l.oxw();
          l.xp6(1),
            l.Q6J("formGroup", j.formModal),
            l.xp6(6),
            l.Q6J(
              "ngIf",
              j.formModal.controls.name.invalid &&
                j.formModal.controls.name.touched
            ),
            l.xp6(1),
            l.Q6J("disabled", !j.formModal.controls.name.valid || null);
        }
      }
      let Me = (() => {
        class q {
          constructor(j, Q, se, U) {
            (this.sharedService = j),
              (this.dashboardService = Q),
              (this.boardService = se),
              (this.route = U),
              (this.formModal = new d.cw({
                name: new d.NI("", [d.kI.required, d.kI.minLength(1)]),
                description: new d.NI("", [d.kI.required, d.kI.minLength(1)]),
              })),
              (this.boards = []);
          }
          submit() {
            this.dashboardService
              .addBoard(this.formModal.value)
              .subscribe((j) => {
                this.dashboardService.updateBoards(j);
              }),
              this.sharedService.changeAddNewBoard(),
              this.sharedService.changeBoardSubmitted();
          }
          submitEdit() {
            this.sharedService.changeEditClicked();
            let j,
              Q = this.dashboardService.currentBoard.subscribe((se) => {
                (se.name = this.formModal.value.name), (j = se);
              });
            this.dashboardService.editBoard(j).subscribe((se) => {
              Q.unsubscribe(), this.dashboardService.updateBoards(se);
            });
          }
          addTask() {
            let j = this.formModal.value;
            (j.board = this.route.snapshot.paramMap.get("id")),
              (j.type = ""),
              this.boardService.currentType.subscribe((Q) => {
                j.type = Q;
              }),
              this.boardService.addTask(j).subscribe((Q) => {
                this.boardService.updateTaskByType(j, Q);
              }),
              this.sharedService.changeAddTask();
          }
          editTask() {
            let j;
            this.boardService.currentTask$.subscribe((Q) => {
              (j = Q), (j.name = this.formModal.value.name);
            }),
              this.boardService.changeTask(j).subscribe((Q) => {
               
              }),
              this.sharedService.changeEditTask();
          }
        }
        return (
          (q.ɵfac = function (j) {
            return new (j || q)(
              l.Y36(I.F),
              l.Y36($.s),
              l.Y36(G.$),
              l.Y36(he.gz)
            );
          }),
          (q.ɵcmp = l.Xpm({
            type: q,
            selectors: [["app-form-modal"]],
            decls: 4,
            vars: 4,
            consts: [
              ["class", "container addBoard", 4, "ngIf"],
              ["class", "container editBoard", 4, "ngIf"],
              ["class", "container addTask", 4, "ngIf"],
              ["class", "container editTask", 4, "ngIf"],
              [1, "container", "addBoard"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "email"],
              [
                "type",
                "text",
                "placeholder",
                "Name",
                "formControlName",
                "name",
              ],
              ["class", "validation", 4, "ngIf"],
              ["for", "password"],
              [
                "type",
                "text",
                "placeholder",
                "Description",
                "formControlName",
                "description",
              ],
              ["type", "submit", 3, "disabled"],
              [1, "validation"],
              [4, "ngIf"],
              [1, "container", "editBoard"],
              [1, "container", "addTask"],
              [1, "container", "editTask"],
              ["for", "name"],
            ],
            template: function (j, Q) {
              1 & j &&
                (l.YNc(0, Ee, 16, 4, "div", 0),
                l.YNc(1, Te, 10, 3, "div", 1),
                l.YNc(2, Je, 10, 3, "div", 2),
                l.YNc(3, Oe, 10, 3, "div", 3)),
                2 & j &&
                  (l.Q6J(
                    "ngIf",
                    Q.sharedService.getBoardAdding() &&
                      !Q.sharedService.getEditClicked()
                  ),
                  l.xp6(1),
                  l.Q6J(
                    "ngIf",
                    Q.sharedService.getEditClicked() &&
                      !Q.sharedService.getBoardAdding()
                  ),
                  l.xp6(1),
                  l.Q6J("ngIf", Q.sharedService.getAddTask()),
                  l.xp6(1),
                  l.Q6J("ngIf", Q.sharedService.getEditTask()));
            },
            dependencies: [H.O5, d._Y, d.Fj, d.JJ, d.JL, d.sg, d.u],
            styles: [
              ".container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:20px solid rgb(145,127,145)}form[_ngcontent-%COMP%]{width:250px;min-width:100%;padding:6%;background-color:#fff}[_nghost-%COMP%]{position:fixed;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(234,8,8)}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(3,241,3)}small[_ngcontent-%COMP%]{color:#ea0808;font-size:small}",
            ],
          })),
          q
        );
      })();
    },
    2614: (je, ce, S) => {
      S.d(ce, { j: () => $ });
      var d = S(6895),
        l = S(433),
        I = S(8256);
      let $ = (() => {
        class G {}
        return (
          (G.ɵfac = function (H) {
            return new (H || G)();
          }),
          (G.ɵmod = I.oAB({ type: G })),
          (G.ɵinj = I.cJS({ imports: [d.ez, l.UX] })),
          G
        );
      })();
    },
    8973: (je, ce, S) => {
      S.r(ce), S.d(ce, { BoardModule: () => Ln });
      var d = S(6895),
        l = S(8256),
        I = S(9082),
        $ = S(5802),
        G = S(3841),
        he = S(8062),
        H = S(9386);
      let ve = (() => {
        class ne {
          constructor(W, Fe, B) {
            (this.shared = W), (this.boardService = Fe), (this.element = B);
          }
          changeTask() {
            let W =
              this.element.nativeElement.closest("app-column").dataset.tasktype;
            this.boardService.updateType(W), this.shared.changeAddTask();
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36(I.F), l.Y36($.$), l.Y36(l.SBq));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-add-new-task"]],
            decls: 2,
            vars: 0,
            consts: [[3, "click"]],
            template: function (W, Fe) {
              1 & W &&
                (l.TgZ(0, "button", 0),
                l.NdJ("click", function () {
                  return Fe.changeTask();
                }),
                l._uU(1, "+"),
                l.qZA());
            },
            styles: [
              "button[_ngcontent-%COMP%]{font-size:3em;display:block;padding:0 6%}",
            ],
          })),
          ne
        );
      })();
      var X = S(433);
      function ye(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "button", 3),
            l.NdJ("click", function () {
              l.CHM(W);
              const B = l.oxw();
              return l.KtG(B.changeAddComment());
            }),
            l._uU(1, " Add comment\n"),
            l.qZA();
        }
      }
      function ie(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "input", 4),
            l.NdJ("ngModelChange", function (B) {
              l.CHM(W);
              const Se = l.oxw();
              return l.KtG((Se.commentValue = B));
            }),
            l.qZA();
        }
        if (2 & ne) {
          const W = l.oxw();
          l.Q6J("ngModel", W.commentValue);
        }
      }
      function Ee(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "button", 5),
            l.NdJ("click", function () {
              l.CHM(W);
              const B = l.oxw();
              return l.KtG(B.submitComment());
            }),
            l._uU(1, " Submit comment\n"),
            l.qZA();
        }
        if (2 & ne) {
          const W = l.oxw();
          l.Q6J("disabled", "" == W.commentValue);
        }
      }
      let Ie = (() => {
        class ne {
          constructor(W) {
            (this.boardService = W),
              (this.commentValue = ""),
              (this.addComment = !1);
          }
          changeAddComment() {
            this.addComment = !this.addComment;
          }
          getAddComment() {
            return this.addComment;
          }
          submitComment() {
            this.boardService
              .addComment(this.task, this.commentValue)
              .subscribe((W) => {
                this.boardService.updateTaskByType(this.task, W);
              }),
              this.changeAddComment();
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36($.$));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-add-comment"]],
            inputs: { task: "task" },
            decls: 3,
            vars: 3,
            consts: [
              [3, "click", 4, "ngIf"],
              [
                "type",
                "text",
                "placeholder",
                "Add comment",
                "required",
                "",
                "minlength",
                "2",
                3,
                "ngModel",
                "ngModelChange",
                4,
                "ngIf",
              ],
              [3, "disabled", "click", 4, "ngIf"],
              [3, "click"],
              [
                "type",
                "text",
                "placeholder",
                "Add comment",
                "required",
                "",
                "minlength",
                "2",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [3, "disabled", "click"],
            ],
            template: function (W, Fe) {
              1 & W &&
                (l.YNc(0, ye, 2, 0, "button", 0),
                l.YNc(1, ie, 1, 1, "input", 1),
                l.YNc(2, Ee, 2, 1, "button", 2)),
                2 & W &&
                  (l.Q6J("ngIf", !Fe.getAddComment()),
                  l.xp6(1),
                  l.Q6J("ngIf", Fe.getAddComment()),
                  l.xp6(1),
                  l.Q6J("ngIf", Fe.getAddComment()));
            },
            dependencies: [d.O5, X.Fj, X.JJ, X.Q7, X.wO, X.On],
            styles: [
              "button[_ngcontent-%COMP%]{font-size:small;margin:1%;padding:2%}",
            ],
          })),
          ne
        );
      })();
      function ae(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "li", 2)(1, "p"),
            l._uU(2),
            l.TgZ(3, "button", 3),
            l.NdJ("click", function () {
              const Se = l.CHM(W).$implicit,
                oe = l.oxw(2);
              return l.KtG(oe.deleteComment(Se._id));
            }),
            l._uU(4, "x"),
            l.qZA()()();
        }
        if (2 & ne) {
          const W = Be.$implicit;
          l.xp6(2), l.hij(" ", W.message, " ");
        }
      }
      function Te(ne, Be) {
        if (
          (1 & ne && (l.TgZ(0, "ul"), l.YNc(1, ae, 5, 1, "li", 1), l.qZA()),
          2 & ne)
        ) {
          const W = l.oxw();
          l.xp6(1), l.Q6J("ngForOf", W.task.comments);
        }
      }
      let Re = (() => {
        class ne {
          constructor(W) {
            this.boardService = W;
          }
          deleteComment(W) {
            this.boardService.deleteComment(this.task, W).subscribe((Fe) => {
              this.boardService.updateTaskByType(this.task, Fe);
            });
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36($.$));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-comments"]],
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              ["class", "comments", 4, "ngFor", "ngForOf"],
              [1, "comments"],
              [3, "click"],
            ],
            template: function (W, Fe) {
              1 & W && l.YNc(0, Te, 2, 1, "ul", 0),
                2 & W && l.Q6J("ngIf", Fe.task);
            },
            dependencies: [d.sg, d.O5],
            styles: [
              "ul[_ngcontent-%COMP%]{border:1px solid rgba(128,128,128,.2)}.comments[_ngcontent-%COMP%]{font-size:small;padding:1%}button[_ngcontent-%COMP%]{padding:2px 4px}",
            ],
          })),
          ne
        );
      })();
      function We(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "button", 3),
            l.NdJ("click", function () {
              l.CHM(W);
              const B = l.oxw(2);
              return l.KtG(B.archiveTask());
            }),
            l._uU(1, "Archive"),
            l.qZA();
        }
      }
      function Je(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "div", 2)(1, "button", 3),
            l.NdJ("click", function () {
              l.CHM(W);
              const B = l.oxw();
              return l.KtG(B.editTask());
            }),
            l._uU(2, "Edit"),
            l.qZA(),
            l._UZ(3, "br"),
            l.TgZ(4, "button", 3),
            l.NdJ("click", function () {
              l.CHM(W);
              const B = l.oxw();
              return l.KtG(B.deleteTask());
            }),
            l._uU(5, "Delete"),
            l.qZA(),
            l._UZ(6, "br"),
            l.YNc(7, We, 2, 0, "button", 4),
            l.qZA();
        }
        if (2 & ne) {
          const W = l.oxw();
          l.xp6(7), l.Q6J("ngIf", "done" === W.task.type);
        }
      }
      let vt = (() => {
        class ne {
          constructor(W, Fe) {
            (this.boardService = W),
              (this.shared = Fe),
              (this.kebabButtonClicked = !1);
          }
          changeKebabButton() {
            this.kebabButtonClicked = !this.kebabButtonClicked;
          }
          deleteTask() {
            this.boardService.deleteTask(this.task).subscribe((W) => {
              this.boardService.updateTaskByType(this.task, W);
            });
          }
          editTask() {
            this.boardService.updateCurrentTask(this.task),
              this.shared.changeEditTask(),
              this.changeKebabButton();
          }
          archiveTask() {
            (this.task.type = "archived"),
              this.boardService.changeTask(this.task).subscribe((W) => {
                document.querySelector(`#task${this.task._id}`)?.remove(),
                  this.boardService.updateTaskByType(this.task, W);
              });
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36($.$), l.Y36(I.F));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-kebab-button"]],
            inputs: { task: "task" },
            decls: 5,
            vars: 1,
            consts: [
              [1, "kebab", 3, "click"],
              ["class", "kebabButtonWrapper", 4, "ngIf"],
              [1, "kebabButtonWrapper"],
              [3, "click"],
              [3, "click", 4, "ngIf"],
            ],
            template: function (W, Fe) {
              1 & W &&
                (l.TgZ(0, "div", 0),
                l.NdJ("click", function () {
                  return Fe.changeKebabButton();
                }),
                l._UZ(1, "span")(2, "span")(3, "span"),
                l.qZA(),
                l.YNc(4, Je, 8, 1, "div", 1)),
                2 & W && (l.xp6(4), l.Q6J("ngIf", Fe.kebabButtonClicked));
            },
            dependencies: [d.O5],
            styles: [
              ".kebab[_ngcontent-%COMP%]{position:absolute;top:2px;right:6px;cursor:pointer}span[_ngcontent-%COMP%]{display:block;width:8px;height:8px;background-color:#50435454;border-radius:50%}.kebabButtonWrapper[_ngcontent-%COMP%]{position:absolute;top:0;right:15px;padding:1%}.kebabButtonWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:transparent;padding:0}",
            ],
          })),
          ne
        );
      })();
      var Pe = S(357),
        Oe = S(791),
        Me = S(3917);
      function q(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "li", 2),
            l.NdJ("dragstart", function (B) {
              const oe = l.CHM(W).$implicit,
                ue = l.oxw();
              return l.KtG(ue.startDrag(B, oe));
            }),
            l.TgZ(1, "p"),
            l._uU(2),
            l.qZA(),
            l._UZ(3, "app-add-comment", 3)(4, "br"),
            l.TgZ(5, "span", 4),
            l._uU(6),
            l.qZA(),
            l._UZ(7, "app-comments", 3)(8, "app-kebab-button", 3),
            l.qZA();
        }
        if (2 & ne) {
          const W = Be.$implicit;
          l.MGl("id", "task", W._id, ""),
            l.xp6(2),
            l.Oqu(W.name),
            l.xp6(1),
            l.Q6J("task", W),
            l.xp6(3),
            l.hij("Comments count : ", W.comments.length, ""),
            l.xp6(1),
            l.Q6J("task", W),
            l.xp6(1),
            l.Q6J("task", W);
        }
      }
      let He = (() => {
        class ne {
          constructor(W, Fe, B) {
            (this.boardService = W),
              (this.element = Fe),
              (this.dashboardService = B),
              (this.tasks = []),
              (this.sorting = ""),
              (this.filterValue = ""),
              (this.sortingBy = ""),
              (this.subs = []);
          }
          ngOnInit() {
            const W = this.dashboardService.sortingBoards.subscribe((Se) => {
              this.sorting = Se;
            });
            this.subs.push(W);
            const Fe = this.dashboardService.filteringBoards.subscribe((Se) => {
              this.filterValue = Se;
            });
            this.subs.push(Fe);
            const B = this.dashboardService.sortingBy$.subscribe((Se) => {
              this.sortingBy = Se;
            });
            this.subs.push(B);
          }
          drop(W) {
            W.preventDefault();
            let Fe = W.dataTransfer.getData("taskId"),
              B = this.element.nativeElement.querySelector("ul"),
              Se = JSON.parse(W.dataTransfer.getData("task"));
            document.querySelector(`#${Fe}`)?.remove();
            let oe = B.closest("app-column").dataset.tasktype;
            (Se.type = oe),
              this.boardService.changeTask(Se).subscribe((ue) => {
                this.boardService.updateTaskByType(Se, ue);
              });
          }
          allowDrop(W) {
            W.preventDefault();
          }
          startDrag(W, Fe) {
            W.dataTransfer.setData("taskId", W.target.id),
              W.dataTransfer.setData("task", JSON.stringify(Fe));
          }
          ngOnDestroy() {
            this.subs.forEach((W) => W.unsubscribe());
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36($.$), l.Y36(l.SBq), l.Y36(H.s));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-column"]],
            inputs: { tasks: "tasks" },
            decls: 6,
            vars: 11,
            consts: [
              [3, "drop", "dragover"],
              [
                "class",
                "task",
                "draggable",
                "true",
                3,
                "id",
                "dragstart",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["draggable", "true", 1, "task", 3, "id", "dragstart"],
              [3, "task"],
              [1, "counter"],
            ],
            template: function (W, Fe) {
              1 & W &&
                (l.TgZ(0, "ul", 0),
                l.NdJ("drop", function (Se) {
                  return Fe.drop(Se);
                })("dragover", function (Se) {
                  return Fe.allowDrop(Se);
                }),
                l._UZ(1, "app-add-new-task"),
                l.YNc(2, q, 9, 6, "li", 1),
                l.ALo(3, "filter"),
                l.ALo(4, "asc"),
                l.ALo(5, "desc"),
                l.qZA()),
                2 & W &&
                  (l.xp6(2),
                  l.Q6J(
                    "ngForOf",
                    l.Dn7(
                      3,
                      1,
                      "asc" === Fe.sorting
                        ? l.xi3(4, 5, Fe.tasks, Fe.sortingBy)
                        : "desc" === Fe.sorting
                        ? l.xi3(5, 8, Fe.tasks, Fe.sortingBy)
                        : Fe.tasks,
                      Fe.filterValue,
                      "name"
                    )
                  ));
            },
            dependencies: [d.sg, ve, Ie, Re, vt, Pe.Z, Oe.i, Me.g],
            styles: [
              "ul[_ngcontent-%COMP%]{border:2px solid rgba(80,67,84,.328);padding:3%}app-add-new-task[_ngcontent-%COMP%]{display:flex;justify-content:center}p[_ngcontent-%COMP%]{margin:1%}.task[_ngcontent-%COMP%]{background-color:#d2b3d64d;border:1px solid rgba(80,67,84,.328);padding:2%;margin:2%;position:relative}.counter[_ngcontent-%COMP%]{font-size:small}",
            ],
          })),
          ne
        );
      })();
      var j = S(5456),
        Q = S(7401);
      let se = (() => {
        class ne {
          constructor(W, Fe) {
            (this.el = W),
              (this.boardService = Fe),
              (this.type = ""),
              (this.subs = []);
          }
          ngOnInit() {
            if ("toDo" === this.type) {
              const W = this.boardService.currentColorToDo.subscribe((Fe) => {
                this.changeColor(Fe);
              });
              this.subs.push(W);
            } else if ("inProgress" === this.type) {
              const W = this.boardService.currentColorInProgress.subscribe(
                (Fe) => {
                  this.changeColor(Fe);
                }
              );
              this.subs.push(W);
            } else if ("done" === this.type) {
              const W = this.boardService.currentColorDone.subscribe((Fe) => {
                this.changeColor(Fe);
              });
              this.subs.push(W);
            } else if ("archived" === this.type) {
              const W = this.boardService.currentColorArchived.subscribe(
                (Fe) => {
                  this.changeColor(Fe);
                }
              );
              this.subs.push(W);
            }
          }
          changeColor(W) {
            this.el.nativeElement.style.backgroundColor = W;
          }
          ngOnDestroy() {
            this.subs.forEach((W) => W.unsubscribe());
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36(l.SBq), l.Y36($.$));
          }),
          (ne.ɵdir = l.lG2({
            type: ne,
            selectors: [["", "appChangeColor", ""]],
            inputs: { type: "type" },
          })),
          ne
        );
      })();
      const U = function (ne) {
        return { "background-color": ne };
      };
      function L(ne, Be) {
        if (1 & ne) {
          const W = l.EpF();
          l.TgZ(0, "li", 2),
            l.NdJ("click", function () {
              const Se = l.CHM(W).$implicit,
                oe = l.oxw();
              return l.KtG(oe.changeColor(Se));
            }),
            l.qZA();
        }
        2 & ne && l.Q6J("ngStyle", l.VKq(1, U, Be.$implicit));
      }
      let Y = (() => {
        class ne {
          constructor(W) {
            (this.boardService = W),
              (this.columnType = ""),
              (this.colors = [
                "rgba(255, 0, 0, 0.2)",
                "rgba(255, 165, 0, 0.2)",
                "rgba(255, 255, 0, 0.2)",
                "rgba(0, 128, 0, 0.2)",
                "rgba(173, 216, 230, 0.2)",
                "rgba(0, 0, 255, 0.2)",
                "rgba(128, 0, 128, 0.2)",
              ]);
          }
          changeColor(W) {
            this.boardService.updateColorByType(this.columnType, W);
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36($.$));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-color-palette"]],
            inputs: { columnType: "columnType" },
            decls: 3,
            vars: 1,
            consts: [
              [1, "colorPaletteWrapper"],
              [3, "ngStyle", "click", 4, "ngFor", "ngForOf"],
              [3, "ngStyle", "click"],
            ],
            template: function (W, Fe) {
              1 & W &&
                (l.TgZ(0, "div", 0)(1, "ul"),
                l.YNc(2, L, 1, 3, "li", 1),
                l.qZA()()),
                2 & W && (l.xp6(2), l.Q6J("ngForOf", Fe.colors));
            },
            dependencies: [d.sg, d.PC],
            styles: [
              ".colorPaletteWrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;border:2px solid white}.colorPaletteWrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:20px;height:20px;border:2px solid white;cursor:pointer}",
            ],
          })),
          ne
        );
      })();
      function z(ne, Be) {
        if (
          (1 & ne &&
            (l.TgZ(0, "div", 1)(1, "h2"),
            l._uU(2, "Archived"),
            l.qZA(),
            l._UZ(3, "app-color-palette", 2)(4, "app-column", 8),
            l.qZA()),
          2 & ne)
        ) {
          const W = l.oxw();
          l.Q6J("type", "archived"),
            l.xp6(3),
            l.Q6J("columnType", "archived"),
            l.xp6(1),
            l.Q6J("tasks", W.tasksArchived);
        }
      }
      function be(ne, Be) {
        1 & ne && (l.TgZ(0, "div"), l._UZ(1, "app-form-modal", 9), l.qZA());
      }
      function fe(ne, Be) {
        1 & ne && (l.TgZ(0, "div"), l._UZ(1, "app-form-modal", 9), l.qZA());
      }
      let $e = (() => {
        class ne {
          constructor(W, Fe, B) {
            (this.shared = W),
              (this.boardService = Fe),
              (this.route = B),
              (this.subs = []),
              (this.tasksToDo = []),
              (this.tasksInProgress = []),
              (this.tasksDone = []),
              (this.tasksArchived = []);
          }
          ngOnInit() {
            let W = this.route.snapshot.paramMap.get("id");
            const Fe = this.boardService.getTasks("toDo", W).subscribe((It) => {
              this.boardService.updateTasksToDo(It);
            });
            this.subs.push(Fe);
            const B = this.boardService.currentTasksToDo.subscribe((It) => {
              this.tasksToDo = It.tasks;
            });
            this.subs.push(B);
            const Se = this.boardService.getTasks("done", W).subscribe((It) => {
              this.boardService.updateTasksDone(It);
            });
            this.subs.push(Se);
            const oe = this.boardService.currentTasksDone.subscribe((It) => {
              this.tasksDone = It.tasks;
            });
            this.subs.push(oe);
            const ue = this.boardService
              .getTasks("inProgress", W)
              .subscribe((It) => {
                this.boardService.updateTasksInProgress(It);
              });
            this.subs.push(ue);
            const Et = this.boardService.currentTasksInProgress.subscribe(
              (It) => {
                this.tasksInProgress = It.tasks;
              }
            );
            this.subs.push(Et);
            const Ht = this.boardService
              .getTasks("archived", W)
              .subscribe((It) => {
                this.boardService.updateTasksArchived(It);
              });
            this.subs.push(Ht);
            const Yt = this.boardService.currentTasksArchived.subscribe(
              (It) => {
                null == It.tasks && (It.tasks = []),
                  (this.tasksArchived = It.tasks);
              }
            );
            this.subs.push(Yt);
          }
          ngOnDestroy() {
            this.subs.forEach((W) => W.unsubscribe());
          }
        }
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)(l.Y36(I.F), l.Y36($.$), l.Y36(G.gz));
          }),
          (ne.ɵcmp = l.Xpm({
            type: ne,
            selectors: [["app-board"]],
            decls: 20,
            vars: 12,
            consts: [
              [1, "columnWrapper"],
              ["appChangeColor", "", 3, "type"],
              [3, "columnType"],
              ["data-tasktype", "toDo", 3, "tasks"],
              ["data-tasktype", "inProgress", 3, "tasks"],
              ["data-tasktype", "done", 3, "tasks"],
              ["appChangeColor", "", 3, "type", 4, "ngIf"],
              [4, "ngIf"],
              ["data-tasktype", "archived", 3, "tasks"],
              ["appCloseModal", ""],
            ],
            template: function (W, Fe) {
              1 & W &&
                (l._UZ(0, "app-filter"),
                l.TgZ(1, "div", 0)(2, "div", 1)(3, "h2"),
                l._uU(4, "To Do"),
                l.qZA(),
                l._UZ(5, "app-color-palette", 2)(6, "app-column", 3),
                l.qZA(),
                l.TgZ(7, "div", 1)(8, "h2"),
                l._uU(9, "In Progress"),
                l.qZA(),
                l._UZ(10, "app-color-palette", 2)(11, "app-column", 4),
                l.qZA(),
                l.TgZ(12, "div", 1)(13, "h2"),
                l._uU(14, "Done"),
                l.qZA(),
                l._UZ(15, "app-color-palette", 2)(16, "app-column", 5),
                l.qZA(),
                l.YNc(17, z, 5, 3, "div", 6),
                l.qZA(),
                l.YNc(18, be, 2, 0, "div", 7),
                l.YNc(19, fe, 2, 0, "div", 7)),
                2 & W &&
                  (l.xp6(2),
                  l.Q6J("type", "toDo"),
                  l.xp6(3),
                  l.Q6J("columnType", "toDo"),
                  l.xp6(1),
                  l.Q6J("tasks", Fe.tasksToDo),
                  l.xp6(1),
                  l.Q6J("type", "inProgress"),
                  l.xp6(3),
                  l.Q6J("columnType", "inProgress"),
                  l.xp6(1),
                  l.Q6J("tasks", Fe.tasksInProgress),
                  l.xp6(1),
                  l.Q6J("type", "done"),
                  l.xp6(3),
                  l.Q6J("columnType", "done"),
                  l.xp6(1),
                  l.Q6J("tasks", Fe.tasksDone),
                  l.xp6(1),
                  l.Q6J("ngIf", Fe.tasksArchived.length),
                  l.xp6(1),
                  l.Q6J("ngIf", Fe.shared.getAddTask()),
                  l.xp6(1),
                  l.Q6J("ngIf", Fe.shared.getEditTask()));
            },
            dependencies: [d.O5, he.z, He, j.X, Q.u, se, Y],
            styles: [
              ".columnWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:2%}.columnWrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:28vw;padding:2%}",
            ],
          })),
          ne
        );
      })();
      var Xe = S(5487);
      let Zt = (() => {
          class ne {}
          return (
            (ne.ɵfac = function (W) {
              return new (W || ne)();
            }),
            (ne.ɵmod = l.oAB({ type: ne })),
            (ne.ɵinj = l.cJS({ imports: [d.ez] })),
            ne
          );
        })(),
        Ye = (() => {
          class ne {}
          return (
            (ne.ɵfac = function (W) {
              return new (W || ne)();
            }),
            (ne.ɵmod = l.oAB({ type: ne })),
            (ne.ɵinj = l.cJS({ imports: [d.ez, X.u5] })),
            ne
          );
        })(),
        yt = (() => {
          class ne {}
          return (
            (ne.ɵfac = function (W) {
              return new (W || ne)();
            }),
            (ne.ɵmod = l.oAB({ type: ne })),
            (ne.ɵinj = l.cJS({ imports: [d.ez] })),
            ne
          );
        })(),
        Jt = (() => {
          class ne {}
          return (
            (ne.ɵfac = function (W) {
              return new (W || ne)();
            }),
            (ne.ɵmod = l.oAB({ type: ne })),
            (ne.ɵinj = l.cJS({ imports: [d.ez] })),
            ne
          );
        })();
      var bt = S(1084);
      let Kt = (() => {
        class ne {}
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)();
          }),
          (ne.ɵmod = l.oAB({ type: ne })),
          (ne.ɵinj = l.cJS({ imports: [d.ez, Zt, Ye, yt, Jt, bt.d] })),
          ne
        );
      })();
      var Ut = S(2614),
        Mt = S(5783);
      let ft = (() => {
        class ne {}
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)();
          }),
          (ne.ɵmod = l.oAB({ type: ne })),
          (ne.ɵinj = l.cJS({ imports: [d.ez] })),
          ne
        );
      })();
      const ot = [{ path: "", component: $e }];
      let Ln = (() => {
        class ne {}
        return (
          (ne.ɵfac = function (W) {
            return new (W || ne)();
          }),
          (ne.ɵmod = l.oAB({ type: ne })),
          (ne.ɵinj = l.cJS({
            imports: [d.ez, Xe.i, Kt, Ut.j, Mt.o, ft, G.Bz.forChild(ot)],
          })),
          ne
        );
      })();
    },
    9715: (je, ce, S) => {
      S.r(ce), S.d(ce, { DashboardModule: () => Q });
      var d = S(6895),
        l = S(8505),
        I = S(8256),
        $ = S(9082),
        G = S(9386),
        he = S(8062);
      let H = (() => {
        class se {
          constructor(L) {
            this.shared = L;
          }
        }
        return (
          (se.ɵfac = function (L) {
            return new (L || se)(I.Y36($.F));
          }),
          (se.ɵcmp = I.Xpm({
            type: se,
            selectors: [["app-add-new-board"]],
            decls: 5,
            vars: 0,
            consts: [
              [3, "click"],
              [1, "buttonPlus"],
            ],
            template: function (L, Y) {
              1 & L &&
                (I.TgZ(0, "button", 0),
                I.NdJ("click", function () {
                  return Y.shared.changeAddNewBoard();
                }),
                I.TgZ(1, "span", 1),
                I._uU(2, "+"),
                I.qZA(),
                I.TgZ(3, "span"),
                I._uU(4, "Add new"),
                I.qZA()());
            },
            styles: [
              "button[_ngcontent-%COMP%]{border-radius:20px;height:auto}.buttonPlus[_ngcontent-%COMP%]{font-size:3em;display:block}@media (min-width: 1280px){button[_ngcontent-%COMP%]{width:11vw}}",
            ],
          })),
          se
        );
      })();
      var ve = S(5456),
        X = S(3841),
        ye = S(357),
        ie = S(791),
        Ee = S(3917);
      function Ie(se, U) {
        if (1 & se) {
          const L = I.EpF();
          I.TgZ(0, "li", 2)(1, "div", 3)(2, "h4"),
            I._uU(3),
            I.qZA(),
            I.TgZ(4, "p"),
            I._uU(5),
            I.qZA(),
            I.TgZ(6, "p"),
            I._uU(7),
            I.ALo(8, "date"),
            I.qZA()(),
            I.TgZ(9, "div", 4)(10, "button", 5),
            I.NdJ("click", function () {
              const be = I.CHM(L).$implicit,
                fe = I.oxw();
              return I.KtG(fe.editBoard(be));
            }),
            I._uU(11, "Edit"),
            I.qZA(),
            I.TgZ(12, "button", 5),
            I.NdJ("click", function () {
              const be = I.CHM(L).$implicit,
                fe = I.oxw();
              return I.KtG(fe.deleteBoard(be._id));
            }),
            I._uU(13, "Delete"),
            I.qZA()()();
        }
        if (2 & se) {
          const L = U.$implicit;
          I.xp6(1),
            I.Q6J("routerLink", "/board/" + L._id),
            I.xp6(2),
            I.Oqu(L.name),
            I.xp6(2),
            I.Oqu(L.description),
            I.xp6(2),
            I.Oqu(I.xi3(8, 4, L.dateCreated, "short"));
        }
      }
      let ae = (() => {
        class se {
          constructor(L, Y) {
            (this.dashboardService = L),
              (this.shared = Y),
              (this.items = []),
              (this.sorting = ""),
              (this.filterValue = ""),
              (this.sortingBy = ""),
              (this.subs = []);
          }
          ngOnInit() {
            const L = this.dashboardService.sortingBoards.subscribe((be) => {
              this.sorting = be;
            });
            this.subs.push(L);
            const Y = this.dashboardService.filteringBoards.subscribe((be) => {
              this.filterValue = be;
            });
            this.subs.push(Y);
            const z = this.dashboardService.sortingBy$.subscribe((be) => {
              this.sortingBy = be;
            });
            this.subs.push(z);
          }
          deleteBoard(L) {
            this.dashboardService.deleteBoard(L).subscribe((Y) => {
              this.dashboardService.updateBoards(Y);
            });
          }
          editBoard(L) {
            this.shared.changeEditClicked(),
              this.dashboardService.updateBoard(L);
          }
          ngOnDestroy() {
            this.subs.forEach((L) => L.unsubscribe());
          }
        }
        return (
          (se.ɵfac = function (L) {
            return new (L || se)(I.Y36(G.s), I.Y36($.F));
          }),
          (se.ɵcmp = I.Xpm({
            type: se,
            selectors: [["app-itemlist"]],
            inputs: { items: "items" },
            decls: 5,
            vars: 11,
            consts: [
              [1, "boards"],
              ["class", "boardsItem", 4, "ngFor", "ngForOf"],
              [1, "boardsItem"],
              [1, "div", 3, "routerLink"],
              [1, "boardsButtonWrapper"],
              [3, "click"],
            ],
            template: function (L, Y) {
              1 & L &&
                (I.TgZ(0, "ul", 0),
                I.YNc(1, Ie, 14, 7, "li", 1),
                I.ALo(2, "filter"),
                I.ALo(3, "asc"),
                I.ALo(4, "desc"),
                I.qZA()),
                2 & L &&
                  (I.xp6(1),
                  I.Q6J(
                    "ngForOf",
                    I.Dn7(
                      2,
                      1,
                      "asc" === Y.sorting
                        ? I.xi3(3, 5, Y.items, Y.sortingBy)
                        : "desc" === Y.sorting
                        ? I.xi3(4, 8, Y.items, Y.sortingBy)
                        : Y.items,
                      Y.filterValue,
                      "name"
                    )
                  ));
            },
            dependencies: [d.sg, X.rH, d.uU, ye.Z, ie.i, Ee.g],
            styles: [
              ".boards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:80vw}.boardsItem[_ngcontent-%COMP%]{border:2px solid rgb(85,60,85);overflow:hidden;margin-right:1%;border-radius:12px;padding:1%}.boardsItem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center}.boardsButtonWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:10px}",
            ],
          })),
          se
        );
      })();
      var Te = S(7401);
      function Re(se, U) {
        1 & se && (I.TgZ(0, "div"), I._UZ(1, "app-form-modal", 3), I.qZA());
      }
      function We(se, U) {
        1 & se && (I.TgZ(0, "div"), I._UZ(1, "app-form-modal", 3), I.qZA());
      }
      let Je = (() => {
        class se {
          constructor(L, Y) {
            (this.shared = L), (this.dashboardService = Y), (this.subs = []);
          }
          ngOnInit() {
            const L = this.dashboardService.currentBoards
              .pipe((0, l.b)((z) => console.log(z)))
              .subscribe((z) => {
                this.boards = z;
              });
            this.subs.push(L);
            const Y = this.dashboardService.getBoards().subscribe((z) => {
              this.dashboardService.updateBoards(z);
            });
            this.subs.push(Y);
          }
          ngOnDestroy() {
            this.subs.forEach((L) => L.unsubscribe());
          }
        }
        return (
          (se.ɵfac = function (L) {
            return new (L || se)(I.Y36($.F), I.Y36(G.s));
          }),
          (se.ɵcmp = I.Xpm({
            type: se,
            selectors: [["app-dashboard"]],
            decls: 6,
            vars: 3,
            consts: [
              [1, "dashboardWrapper"],
              [3, "items"],
              [4, "ngIf"],
              ["appCloseModal", ""],
            ],
            template: function (L, Y) {
              1 & L &&
                (I._UZ(0, "app-filter"),
                I.TgZ(1, "div", 0),
                I._UZ(2, "app-add-new-board")(3, "app-itemlist", 1),
                I.qZA(),
                I.YNc(4, Re, 2, 0, "div", 2),
                I.YNc(5, We, 2, 0, "div", 2)),
                2 & L &&
                  (I.xp6(3),
                  I.Q6J("items", Y.boards),
                  I.xp6(1),
                  I.Q6J("ngIf", Y.shared.getBoardAdding()),
                  I.xp6(1),
                  I.Q6J("ngIf", Y.shared.getEditClicked()));
            },
            dependencies: [d.O5, he.z, H, ve.X, ae, Te.u],
            styles: [
              ".dashboardWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;margin:1%}",
            ],
          })),
          se
        );
      })();
      var vt = S(5487);
      let Pe = (() => {
        class se {}
        return (
          (se.ɵfac = function (L) {
            return new (L || se)();
          }),
          (se.ɵmod = I.oAB({ type: se })),
          (se.ɵinj = I.cJS({ imports: [d.ez] })),
          se
        );
      })();
      var Oe = S(2614),
        Me = S(1084);
      let q = (() => {
        class se {}
        return (
          (se.ɵfac = function (L) {
            return new (L || se)();
          }),
          (se.ɵmod = I.oAB({ type: se })),
          (se.ɵinj = I.cJS({ imports: [d.ez, X.Bz, Me.d, Me.d] })),
          se
        );
      })();
      var He = S(5783);
      const j = [{ path: "", component: Je }];
      let Q = (() => {
        class se {}
        return (
          (se.ɵfac = function (L) {
            return new (L || se)();
          }),
          (se.ɵmod = I.oAB({ type: se })),
          (se.ɵinj = I.cJS({
            imports: [d.ez, X.Bz, vt.i, Pe, Oe.j, q, He.o, X.Bz.forChild(j)],
          })),
          se
        );
      })();
    },
    5802: (je, ce, S) => {
      S.d(ce, { $: () => $ });
      var d = S(1135),
        l = S(8256),
        I = S(529);
      let $ = (() => {
        class G {
          constructor(H) {
            (this.http = H),
              (this.url = "https://todo-app-task-control.herokuapp.com/task/"),
              (this.tasksToDo = new d.X([])),
              (this.currentTasksToDo = this.tasksToDo.asObservable()),
              (this.tasksInProgress = new d.X([])),
              (this.currentTasksInProgress =
                this.tasksInProgress.asObservable()),
              (this.tasksDone = new d.X([])),
              (this.currentTasksDone = this.tasksDone.asObservable()),
              (this.tasksArchived = new d.X([])),
              (this.currentTasksArchived = this.tasksArchived.asObservable()),
              (this.currentTask = new d.X({})),
              (this.currentTask$ = this.currentTask.asObservable()),
              (this.tasksType = new d.X("")),
              (this.currentType = this.tasksType.asObservable()),
              (this.colorToDo = new d.X("transparent")),
              (this.currentColorToDo = this.colorToDo.asObservable()),
              (this.colorInProgress = new d.X("transparent")),
              (this.currentColorInProgress =
                this.colorInProgress.asObservable()),
              (this.colorDone = new d.X("transparent")),
              (this.currentColorDone = this.colorDone.asObservable()),
              (this.colorArchived = new d.X("transparent")),
              (this.currentColorArchived = this.colorArchived.asObservable());
          }
          updateTasksToDo(H) {
            this.tasksToDo.next(H);
          }
          updateTasksInProgress(H) {
            this.tasksInProgress.next(H);
          }
          updateTasksDone(H) {
            this.tasksDone.next(H);
          }
          updateTasksArchived(H) {
            this.tasksArchived.next(H);
          }
          updateCurrentTask(H) {
            this.currentTask.next(H);
          }
          updateType(H) {
            this.tasksType.next(H);
          }
          addTask(H) {
            const ve = JSON.stringify(H);
            return this.http.post(this.url, ve);
          }
          getTasks(H, ve) {
            return this.http.get(this.url + H + "/" + ve);
          }
          addComment(H, ve) {
            const X = JSON.stringify({ message: ve, ...H });
            return this.http.patch(this.url + `comment/${H._id}`, X);
          }
          deleteComment(H, ve) {
            return this.http.delete(this.url + `comment/${H._id}/${ve}`);
          }
          deleteTask(H) {
            return this.http.delete(this.url + `${H._id}`);
          }
          changeTask(H) {
            const ve = H._id,
              X = JSON.stringify(H);
            return this.http.patch(this.url + `${ve}`, X);
          }
          updateTaskByType(H, ve) {
            "toDo" === H.type
              ? this.updateTasksToDo(ve)
              : "done" === H.type
              ? this.updateTasksDone(ve)
              : "inProgress" === H.type
              ? this.updateTasksInProgress(ve)
              : "archived" === H.type && this.updateTasksArchived(ve);
          }
          updateColorByType(H, ve) {
            "toDo" === H
              ? this.colorToDo.next(ve)
              : "inProgress" === H
              ? this.colorInProgress.next(ve)
              : "done" === H
              ? this.colorDone.next(ve)
              : "archived" === H && this.colorArchived.next(ve);
          }
        }
        return (
          (G.ɵfac = function (H) {
            return new (H || G)(l.LFG(I.eN));
          }),
          (G.ɵprov = l.Yz7({ token: G, factory: G.ɵfac, providedIn: "root" })),
          G
        );
      })();
    },
    9386: (je, ce, S) => {
      S.d(ce, { s: () => $ });
      var d = S(1135),
        l = S(8256),
        I = S(529);
      let $ = (() => {
        class G {
          constructor(H) {
            (this.http = H),
              (this.url = "https://todo-app-task-control.herokuapp.com/"),
              (this.boards = new d.X([])),
              (this.currentBoards = this.boards.asObservable()),
              (this.board = new d.X({})),
              (this.currentBoard = this.board.asObservable()),
              (this.sortingBoardsSub = new d.X("")),
              (this.sortingBoards = this.sortingBoardsSub.asObservable()),
              (this.filteringBoardsSub = new d.X("")),
              (this.filteringBoards = this.filteringBoardsSub.asObservable()),
              (this.sortingBySubj = new d.X("")),
              (this.sortingBy$ = this.sortingBySubj.asObservable());
          }
          updateBoards(H) {
            this.boards.next(H.boards);
          }
          updateBoard(H) {
            this.board.next(H);
          }
          addBoard(H) {
            const ve = JSON.stringify(H);
            return this.http.post(this.url + "board", ve);
          }
          getBoards() {
            return this.http.get(this.url + "board");
          }
          deleteBoard(H) {
            return this.http.delete(this.url + "board/" + H);
          }
          editBoard(H) {
            const ve = JSON.stringify(H);
            return this.http.patch(this.url + "board/" + H._id, ve);
          }
          updateSortingBoards(H) {
            this.sortingBoardsSub.next(H);
          }
          updateFilteringBoards(H) {
            this.filteringBoardsSub.next(H);
          }
          updateSortingBy(H) {
            this.sortingBySubj.next(H);
          }
        }
        return (
          (G.ɵfac = function (H) {
            return new (H || G)(l.LFG(I.eN));
          }),
          (G.ɵprov = l.Yz7({ token: G, factory: G.ɵfac, providedIn: "root" })),
          G
        );
      })();
    },
    7401: (je, ce, S) => {
      S.d(ce, { u: () => I });
      var d = S(8256),
        l = S(9082);
      let I = (() => {
        class $ {
          constructor(he, H) {
            (this.el = he), (this.shared = H);
          }
          closeModal(he) {
            let H = he.target;
            this.el.nativeElement.querySelector(".addBoard") &&
            !H.closest(".addBoard")
              ? this.shared.changeAddNewBoard()
              : this.el.nativeElement.querySelector(".editBoard") &&
                !H.closest(".editBoard")
              ? this.shared.changeEditClicked()
              : this.el.nativeElement.querySelector(".addTask") &&
                !H.closest(".addTask")
              ? this.shared.changeAddTask()
              : this.el.nativeElement.querySelector(".editTask") &&
                !H.closest(".editTask") &&
                this.shared.changeEditTask();
          }
        }
        return (
          ($.ɵfac = function (he) {
            return new (he || $)(d.Y36(d.SBq), d.Y36(l.F));
          }),
          ($.ɵdir = d.lG2({
            type: $,
            selectors: [["", "appCloseModal", ""]],
            hostBindings: function (he, H) {
              1 & he &&
                d.NdJ("click", function (X) {
                  return H.closeModal(X);
                });
            },
          })),
          $
        );
      })();
    },
    5783: (je, ce, S) => {
      S.d(ce, { o: () => I });
      var d = S(6895),
        l = S(8256);
      let I = (() => {
        class $ {}
        return (
          ($.ɵfac = function (he) {
            return new (he || $)();
          }),
          ($.ɵmod = l.oAB({ type: $ })),
          ($.ɵinj = l.cJS({ imports: [d.ez] })),
          $
        );
      })();
    },
    357: (je, ce, S) => {
      S.d(ce, { Z: () => l });
      var d = S(8256);
      let l = (() => {
        class I {
          transform(G, he) {
            return (
              !G ||
                !he ||
                G.sort((H, ve) =>
                  H[he] < ve[he] ? -1 : H[he] > ve[he] ? 1 : 0
                ),
              G
            );
          }
        }
        return (
          (I.ɵfac = function (G) {
            return new (G || I)();
          }),
          (I.ɵpipe = d.Yjl({ name: "asc", type: I, pure: !1 })),
          I
        );
      })();
    },
    791: (je, ce, S) => {
      S.d(ce, { i: () => l });
      var d = S(8256);
      let l = (() => {
        class I {
          transform(G, he) {
            return (
              !G ||
                !he ||
                G.sort((H, ve) =>
                  ve[he] < H[he] ? -1 : ve[he] > H[he] ? 1 : 0
                ),
              G
            );
          }
        }
        return (
          (I.ɵfac = function (G) {
            return new (G || I)();
          }),
          (I.ɵpipe = d.Yjl({ name: "desc", type: I, pure: !1 })),
          I
        );
      })();
    },
    3917: (je, ce, S) => {
      S.d(ce, { g: () => l });
      var d = S(8256);
      let l = (() => {
        class I {
          transform(G, he, H) {
            if (!G || !he) return G;
            let ve = [];
            for (let X of G)
              X[H].toLowerCase().includes(he.toLowerCase()) && ve.push(X);
            return ve;
          }
        }
        return (
          (I.ɵfac = function (G) {
            return new (G || I)();
          }),
          (I.ɵpipe = d.Yjl({ name: "filter", type: I, pure: !1 })),
          I
        );
      })();
    },
    1084: (je, ce, S) => {
      S.d(ce, { d: () => I });
      var d = S(6895),
        l = S(8256);
      let I = (() => {
        class $ {}
        return (
          ($.ɵfac = function (he) {
            return new (he || $)();
          }),
          ($.ɵmod = l.oAB({ type: $ })),
          ($.ɵinj = l.cJS({ imports: [d.ez] })),
          $
        );
      })();
    },
    9082: (je, ce, S) => {
      S.d(ce, { F: () => l });
      var d = S(8256);
      let l = (() => {
        class I {
          constructor() {
            (this.clicked = !1),
              (this.boardSubmitted = !1),
              (this.editClicked = !1),
              (this.addTask = !1),
              (this.addComment = !1),
              (this.editTask = !1),
              (this.registerFormSubmitted = !1);
          }
          getRegisterFormSubmitted() {
            return this.registerFormSubmitted;
          }
          changeRegisterFormSubmitted() {
            this.registerFormSubmitted = !this.registerFormSubmitted;
          }
          getBoardAdding() {
            return this.clicked;
          }
          changeAddNewBoard() {
            this.clicked = !this.clicked;
          }
          changeBoardSubmitted() {
            this.boardSubmitted = !this.boardSubmitted;
          }
          getBoardSubmitted() {
            return this.boardSubmitted;
          }
          changeEditClicked() {
            this.editClicked = !this.editClicked;
          }
          getEditClicked() {
            return this.editClicked;
          }
          changeAddTask() {
            this.addTask = !this.addTask;
          }
          getAddTask() {
            return this.addTask;
          }
          changeEditTask() {
            this.editTask = !this.editTask;
          }
          getEditTask() {
            return this.editTask;
          }
        }
        return (
          (I.ɵfac = function (G) {
            return new (G || I)();
          }),
          (I.ɵprov = d.Yz7({ token: I, factory: I.ɵfac, providedIn: "root" })),
          I
        );
      })();
    },
    8062: (je, ce, S) => {
      S.d(ce, { z: () => ye });
      var d = S(4004),
        l = S(5698),
        I = S(8256),
        $ = S(3841),
        G = S(9386),
        he = S(6895),
        H = S(433);
      function ve(ie, Ee) {
        if (1 & ie) {
          const Ie = I.EpF();
          I.TgZ(0, "input", 7),
            I.NdJ("ngModelChange", function (Te) {
              I.CHM(Ie);
              const Re = I.oxw();
              return I.KtG((Re.filterValue = Te));
            })("input", function () {
              I.CHM(Ie);
              const Te = I.oxw();
              return I.KtG(Te.updateFilter());
            }),
            I.qZA();
        }
        if (2 & ie) {
          const Ie = I.oxw();
          I.Q6J("ngModel", Ie.filterValue);
        }
      }
      function X(ie, Ee) {
        if ((1 & ie && (I.TgZ(0, "option", 8), I._uU(1), I.qZA()), 2 & ie)) {
          const Ie = Ee.$implicit;
          I.s9C("value", Ie.value), I.xp6(1), I.hij(" ", Ie.name, " ");
        }
      }
      let ye = (() => {
        class ie {
          constructor(Ie, ae, Te) {
            (this.route = Ie),
              (this.router = ae),
              (this.dashboardService = Te),
              (this.filterValue = ""),
              (this.sortingBySelect = "name"),
              (this.boardName = ""),
              (this.options = [
                { name: "By name", value: "name" },
                { name: "By description", value: "description" },
                { name: "By date", value: "dateCreated" },
              ]),
              (this.filterClicked = !1);
          }
          ngOnInit() {
            this.router.url.includes("/board") &&
              this.dashboardService
                .getBoards()
                .pipe(
                  (0, d.U)((Ie) => Ie.boards),
                  (0, d.U)((Ie) =>
                    Ie.filter((ae) => ae._id === this.changeTitle())
                  ),
                  (0, d.U)((Ie) => Ie[0].name),
                  (0, l.q)(1)
                )
                .subscribe((Ie) => {
                  this.boardName = Ie;
                });
          }
          changeTitle() {
            return this.route.snapshot.paramMap.get("id");
          }
          sortAsc() {
            this.dashboardService.updateSortingBoards("asc");
          }
          sortDesc() {
            this.dashboardService.updateSortingBoards("desc");
          }
          filterBy() {
            (this.filterClicked = !this.filterClicked),
              (this.filterValue = ""),
              this.updateFilter();
          }
          updateFilter() {
            this.dashboardService.updateFilteringBoards(this.filterValue);
          }
          selectChange(Ie) {
            (this.sortingBySelect = Ie.value),
              this.dashboardService.updateSortingBy(this.sortingBySelect);
          }
        }
        return (
          (ie.ɵfac = function (Ie) {
            return new (Ie || ie)(I.Y36($.gz), I.Y36($.F0), I.Y36(G.s));
          }),
          (ie.ɵcmp = I.Xpm({
            type: ie,
            selectors: [["app-filter"]],
            decls: 14,
            vars: 4,
            consts: [
              [1, "filterWrapper"],
              [1, "buttonWrapper"],
              [
                "type",
                "text",
                3,
                "ngModel",
                "ngModelChange",
                "input",
                4,
                "ngIf",
              ],
              [3, "click"],
              [1, "customSelect"],
              [3, "change"],
              [3, "value", 4, "ngFor", "ngForOf"],
              ["type", "text", 3, "ngModel", "ngModelChange", "input"],
              [3, "value"],
            ],
            template: function (Ie, ae) {
              1 & Ie &&
                (I.TgZ(0, "div", 0)(1, "h2"),
                I._uU(2),
                I.qZA(),
                I.TgZ(3, "div", 1),
                I.YNc(4, ve, 1, 1, "input", 2),
                I.TgZ(5, "button", 3),
                I.NdJ("click", function () {
                  return ae.filterBy();
                }),
                I._uU(6),
                I.qZA(),
                I.TgZ(7, "div", 4)(8, "select", 5),
                I.NdJ("change", function (Re) {
                  return ae.selectChange(Re.target);
                }),
                I.YNc(9, X, 2, 2, "option", 6),
                I.qZA()(),
                I.TgZ(10, "button", 3),
                I.NdJ("click", function () {
                  return ae.sortAsc();
                }),
                I._uU(11, "ASC"),
                I.qZA(),
                I.TgZ(12, "button", 3),
                I.NdJ("click", function () {
                  return ae.sortDesc();
                }),
                I._uU(13, "DESC"),
                I.qZA()()()),
                2 & Ie &&
                  (I.xp6(2),
                  I.Oqu(
                    ae.router.url.includes("/board")
                      ? ae.boardName
                      : "Dashboard"
                  ),
                  I.xp6(2),
                  I.Q6J("ngIf", ae.filterClicked),
                  I.xp6(2),
                  I.hij(" ", ae.filterClicked ? "Hide filter" : "Filter", " "),
                  I.xp6(3),
                  I.Q6J("ngForOf", ae.options));
            },
            dependencies: [he.sg, he.O5, H.YN, H.Kr, H.Fj, H.JJ, H.On],
            styles: [
              ".filterWrapper[_ngcontent-%COMP%]{margin:1% 3%;display:flex;justify-content:center;flex-wrap:wrap;flex-direction:column;align-items:center}.buttonWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-right:1%}@media (min-width: 768px){.buttonWrapper[_ngcontent-%COMP%]{width:32%}.filterWrapper[_ngcontent-%COMP%]{margin:2%;display:flex;justify-content:space-between;flex-direction:row}}@media (min-width: 453px) and (max-width: 768px){.buttonWrapper[_ngcontent-%COMP%]{width:44%}}@media (min-width: 1280px){.buttonWrapper[_ngcontent-%COMP%]{width:21%}}",
            ],
          })),
          ie
        );
      })();
    },
    5487: (je, ce, S) => {
      S.d(ce, { i: () => $ });
      var d = S(6895),
        l = S(433),
        I = S(8256);
      let $ = (() => {
        class G {}
        return (
          (G.ɵfac = function (H) {
            return new (H || G)();
          }),
          (G.ɵmod = I.oAB({ type: G })),
          (G.ɵinj = I.cJS({ imports: [d.ez, l.u5] })),
          G
        );
      })();
    },
    2684: (je, ce, S) => {
      var d = S(1481),
        l = S(8256),
        I = S(529),
        $ = S(3841),
        G = S(1135);
      let he = (() => {
        class B {
          constructor(oe, ue) {
            (this.http = oe),
              (this.router = ue),
              (this.url = "https://todo-app-task-control.herokuapp.com/"),
              (this.isLoginSub = new G.X(this.hasToken())),
              (this.currentUser = new G.X(""));
          }
          getCurrentUser() {
            return this.currentUser.asObservable();
          }
          updateCurrentUser(oe) {
            this.currentUser.next(oe);
          }
          isLogin$() {
            return this.isLoginSub.asObservable();
          }
          hasToken() {
            return !!localStorage.getItem("token");
          }
          proceedLogin(oe) {
            const ue = JSON.stringify(oe);
            return this.http.post(this.url + "login", ue);
          }
          getUser() {
            return this.http.get(this.url);
          }
          logout() {
            localStorage.removeItem("token"),
              this.isLoginSub.next(!1),
              this.router.navigate(["/"]);
          }
        }
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)(l.LFG(I.eN), l.LFG($.F0));
          }),
          (B.ɵprov = l.Yz7({ token: B, factory: B.ɵfac, providedIn: "root" })),
          B
        );
      })();
      var H = S(9082),
        ve = S(6895),
        X = S(433);
      let ye = (() => {
        class B {
          constructor(oe) {
            (this.http = oe),
              (this.url = "https://todo-app-task-control.herokuapp.com/");
          }
          proceedRegister(oe) {
            const ue = JSON.stringify(oe);
            return this.http.post(this.url + "register", ue);
          }
        }
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)(l.LFG(I.eN));
          }),
          (B.ɵprov = l.Yz7({ token: B, factory: B.ɵfac, providedIn: "root" })),
          B
        );
      })();
      function ie(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, " Email address cannot be empty"),
          l.qZA());
      }
      function Ee(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, "Enter correct email, with at least 2 characters after @"),
          l.qZA());
      }
      function Ie(B, Se) {
        if (
          (1 & B &&
            (l.TgZ(0, "div", 11),
            l.YNc(1, ie, 2, 0, "small", 12),
            l.YNc(2, Ee, 2, 0, "small", 12),
            l.qZA()),
          2 & B)
        ) {
          const oe = l.oxw();
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.email.errors
                ? null
                : oe.form.controls.email.errors.required
            ),
            l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.email.errors
                ? null
                : oe.form.controls.email.errors.pattern
            );
        }
      }
      function ae(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"), l._uU(1, " Password cannot be empty"), l.qZA());
      }
      function Te(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, "Password must be at least 5 characters"),
          l.qZA());
      }
      function Re(B, Se) {
        if (
          (1 & B &&
            (l.TgZ(0, "div", 11),
            l.YNc(1, ae, 2, 0, "small", 12),
            l.YNc(2, Te, 2, 0, "small", 12),
            l.qZA()),
          2 & B)
        ) {
          const oe = l.oxw();
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.password.errors
                ? null
                : oe.form.controls.password.errors.required
            ),
            l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.password.errors
                ? null
                : oe.form.controls.password.errors.minlength
            );
        }
      }
      function We(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"), l._uU(1, " Name cannot be empty"), l.qZA());
      }
      function Je(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, "Name must be at least 4 characters"),
          l.qZA());
      }
      function vt(B, Se) {
        if (
          (1 & B &&
            (l.TgZ(0, "div", 11),
            l.YNc(1, We, 2, 0, "small", 12),
            l.YNc(2, Je, 2, 0, "small", 12),
            l.qZA()),
          2 & B)
        ) {
          const oe = l.oxw();
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.username.errors
                ? null
                : oe.form.controls.username.errors.required
            ),
            l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.form.controls.username.errors
                ? null
                : oe.form.controls.username.errors.minlength
            );
        }
      }
      let Pe = (() => {
        class B {
          constructor(oe, ue) {
            (this.authService = oe),
              (this.shared = ue),
              (this.form = new X.cw({
                email: new X.NI("", [
                  X.kI.required,
                  X.kI.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                ]),
                password: new X.NI("", [X.kI.required, X.kI.minLength(5)]),
                username: new X.NI("", [X.kI.minLength(4), X.kI.required]),
              }));
          }
          submit() {
            this.authService
              .proceedRegister(this.form.value)
              .subscribe((oe) => {
                "Profile created successfully" === oe.message &&
                  this.shared.changeRegisterFormSubmitted();
              }),
              this.form.reset();
          }
        }
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)(l.Y36(ye), l.Y36(H.F));
          }),
          (B.ɵcmp = l.Xpm({
            type: B,
            selectors: [["app-form"]],
            decls: 22,
            vars: 5,
            consts: [
              [1, "formWrapper"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "email"],
              [
                "type",
                "text",
                "id",
                "email",
                "placeholder",
                "Email",
                "formControlName",
                "email",
              ],
              ["class", "validation", 4, "ngIf"],
              ["for", "password"],
              [
                "type",
                "password",
                "id",
                "password",
                "placeholder",
                "Password",
                "formControlName",
                "password",
              ],
              ["for", "name"],
              [
                "type",
                "text",
                "id",
                "usename",
                "placeholder",
                "Enter your username",
                "formControlName",
                "username",
              ],
              ["type", "submit", 3, "disabled"],
              [1, "validation"],
              [4, "ngIf"],
            ],
            template: function (oe, ue) {
              1 & oe &&
                (l.TgZ(0, "div", 0)(1, "form", 1),
                l.NdJ("ngSubmit", function () {
                  return ue.submit();
                }),
                l.TgZ(2, "div", 2)(3, "label", 3),
                l._uU(4, "Enter email:"),
                l.qZA(),
                l._UZ(5, "br")(6, "input", 4),
                l.YNc(7, Ie, 3, 2, "div", 5),
                l.qZA(),
                l.TgZ(8, "div", 2)(9, "label", 6),
                l._uU(10, "Enter password:"),
                l.qZA(),
                l._UZ(11, "br")(12, "input", 7),
                l.YNc(13, Re, 3, 2, "div", 5),
                l.qZA(),
                l.TgZ(14, "div", 2)(15, "label", 8),
                l._uU(16, "Enter username:"),
                l.qZA(),
                l._UZ(17, "br")(18, "input", 9),
                l.YNc(19, vt, 3, 2, "div", 5),
                l.qZA(),
                l.TgZ(20, "button", 10),
                l._uU(21, " Register "),
                l.qZA()()()),
                2 & oe &&
                  (l.xp6(1),
                  l.Q6J("formGroup", ue.form),
                  l.xp6(6),
                  l.Q6J(
                    "ngIf",
                    ue.form.controls.email.invalid &&
                      ue.form.controls.email.touched
                  ),
                  l.xp6(6),
                  l.Q6J(
                    "ngIf",
                    ue.form.controls.password.invalid &&
                      ue.form.controls.password.touched
                  ),
                  l.xp6(6),
                  l.Q6J(
                    "ngIf",
                    ue.form.controls.username.invalid &&
                      ue.form.controls.username.touched
                  ),
                  l.xp6(1),
                  l.Q6J("disabled", !ue.form.valid || null));
            },
            dependencies: [ve.O5, X._Y, X.Fj, X.JJ, X.JL, X.sg, X.u],
            styles: [
              "input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(234,8,8)}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(3,241,3)}small[_ngcontent-%COMP%]{color:#ea0808;font-size:small}.formWrapper[_ngcontent-%COMP%], .formLoginWrapper[_ngcontent-%COMP%]{padding:20px}.form-group[_ngcontent-%COMP%]{padding:4%}[_nghost-%COMP%]{border:1px solid rgba(80,67,84,.328);border-radius:10px;display:block}",
            ],
          })),
          B
        );
      })();
      function Oe(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, " Email address cannot be empty"),
          l.qZA());
      }
      function Me(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, "Enter correct email, with at least 2 characters after @"),
          l.qZA());
      }
      function q(B, Se) {
        if (
          (1 & B &&
            (l.TgZ(0, "div", 9),
            l.YNc(1, Oe, 2, 0, "small", 10),
            l.YNc(2, Me, 2, 0, "small", 10),
            l.qZA()),
          2 & B)
        ) {
          const oe = l.oxw();
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.formLogin.controls.email.errors
                ? null
                : oe.formLogin.controls.email.errors.required
            ),
            l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.formLogin.controls.email.errors
                ? null
                : oe.formLogin.controls.email.errors.pattern
            );
        }
      }
      function He(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"), l._uU(1, " Password cannot be empty"), l.qZA());
      }
      function j(B, Se) {
        1 & B &&
          (l.TgZ(0, "small"),
          l._uU(1, "Password must be at least 5 characters"),
          l.qZA());
      }
      function Q(B, Se) {
        if (
          (1 & B &&
            (l.TgZ(0, "div", 9),
            l.YNc(1, He, 2, 0, "small", 10),
            l.YNc(2, j, 2, 0, "small", 10),
            l.qZA()),
          2 & B)
        ) {
          const oe = l.oxw();
          l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.formLogin.controls.password.errors
                ? null
                : oe.formLogin.controls.password.errors.required
            ),
            l.xp6(1),
            l.Q6J(
              "ngIf",
              null == oe.formLogin.controls.password.errors
                ? null
                : oe.formLogin.controls.password.errors.minlength
            );
        }
      }
      let se = (() => {
        class B {
          constructor(oe, ue) {
            (this.loginService = oe),
              (this.router = ue),
              (this.formLogin = new X.cw({
                email: new X.NI("", [
                  X.kI.required,
                  X.kI.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                ]),
                password: new X.NI("", [X.kI.required, X.kI.minLength(5)]),
              }));
          }
          submit() {
            this.loginService
              .proceedLogin(this.formLogin.value)
              .subscribe((oe) => {
                localStorage.setItem("token", oe.jwt_token),
                  this.loginService.isLoginSub.next(!0),
                  this.loginService.getUser().subscribe((Et) => {
                    this.loginService.updateCurrentUser(Et.user.username);
                  }),
                  this.router.navigate(["/dashboard"]);
              }),
              this.formLogin.reset();
          }
        }
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)(l.Y36(he), l.Y36($.F0));
          }),
          (B.ɵcmp = l.Xpm({
            type: B,
            selectors: [["app-form-login"]],
            decls: 16,
            vars: 4,
            consts: [
              [1, "formLoginWrapper"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "email"],
              [
                "type",
                "text",
                "id",
                "email",
                "placeholder",
                "Email",
                "formControlName",
                "email",
              ],
              ["class", "validation", 4, "ngIf"],
              ["for", "password"],
              [
                "type",
                "password",
                "id",
                "password",
                "placeholder",
                "Password",
                "formControlName",
                "password",
              ],
              ["type", "submit", 3, "disabled"],
              [1, "validation"],
              [4, "ngIf"],
            ],
            template: function (oe, ue) {
              1 & oe &&
                (l.TgZ(0, "div", 0)(1, "form", 1),
                l.NdJ("ngSubmit", function () {
                  return ue.submit();
                }),
                l.TgZ(2, "div", 2)(3, "label", 3),
                l._uU(4, "Enter email:"),
                l.qZA(),
                l._UZ(5, "br")(6, "input", 4),
                l.YNc(7, q, 3, 2, "div", 5),
                l.qZA(),
                l.TgZ(8, "div", 2)(9, "label", 6),
                l._uU(10, "Enter password:"),
                l.qZA(),
                l._UZ(11, "br")(12, "input", 7),
                l.YNc(13, Q, 3, 2, "div", 5),
                l.qZA(),
                l.TgZ(14, "button", 8),
                l._uU(15, " Login "),
                l.qZA()()()),
                2 & oe &&
                  (l.xp6(1),
                  l.Q6J("formGroup", ue.formLogin),
                  l.xp6(6),
                  l.Q6J(
                    "ngIf",
                    ue.formLogin.controls.email.invalid &&
                      ue.formLogin.controls.email.touched
                  ),
                  l.xp6(6),
                  l.Q6J(
                    "ngIf",
                    ue.formLogin.controls.password.invalid &&
                      ue.formLogin.controls.password.touched
                  ),
                  l.xp6(1),
                  l.Q6J("disabled", !ue.formLogin.valid || null));
            },
            dependencies: [ve.O5, X._Y, X.Fj, X.JJ, X.JL, X.sg, X.u],
            styles: [
              "input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(234,8,8)}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:1px solid rgb(3,241,3)}small[_ngcontent-%COMP%]{color:#ea0808;font-size:small}.formWrapper[_ngcontent-%COMP%], .formLoginWrapper[_ngcontent-%COMP%]{padding:20px}.form-group[_ngcontent-%COMP%]{padding:4%}[_nghost-%COMP%]{border:1px solid rgba(80,67,84,.328);border-radius:10px;display:block}",
            ],
          })),
          B
        );
      })();
      function U(B, Se) {
        1 & B && (l.TgZ(0, "h1"), l._uU(1), l.ALo(2, "uppercase"), l.qZA()),
          2 & B && (l.xp6(1), l.hij(" ", l.lcZ(2, 1, "to do list"), " "));
      }
      function L(B, Se) {
        1 & B && l._UZ(0, "app-form");
      }
      function Y(B, Se) {
        1 & B && l._UZ(0, "app-form-login");
      }
      let z = (() => {
          class B {
            constructor(oe, ue, Et) {
              (this.loginService = oe),
                (this.shared = ue),
                (this.router = Et),
                (this.registerClicked = !1),
                (this.loginClicked = !1);
            }
            ngOnInit() {
              this.loginService.isLoginSub.getValue() &&
                (this.loginService.getUser().subscribe((oe) => {
                  console.log(oe);
                }),
                this.router.navigate(["/dashboard"]));
            }
          }
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)(l.Y36(he), l.Y36(H.F), l.Y36($.F0));
            }),
            (B.ɵcmp = l.Xpm({
              type: B,
              selectors: [["app-auth"]],
              decls: 10,
              vars: 5,
              consts: [
                [1, "welcomePageWrapper"],
                [4, "ngIf"],
                [1, "buttonWrapper"],
                [3, "disabled", "click"],
              ],
              template: function (oe, ue) {
                1 & oe &&
                  (l.TgZ(0, "div", 0)(1, "div"),
                  l.YNc(2, U, 3, 3, "h1", 1),
                  l.YNc(3, L, 1, 0, "app-form", 1),
                  l.YNc(4, Y, 1, 0, "app-form-login", 1),
                  l.qZA(),
                  l.TgZ(5, "div", 2)(6, "button", 3),
                  l.NdJ("click", function () {
                    return (
                      (ue.registerClicked = !ue.registerClicked),
                      (ue.loginClicked = !1)
                    );
                  }),
                  l._uU(7, " Register "),
                  l.qZA(),
                  l.TgZ(8, "button", 3),
                  l.NdJ("click", function () {
                    return (
                      (ue.loginClicked = !ue.loginClicked),
                      (ue.registerClicked = !1)
                    );
                  }),
                  l._uU(9, " Login "),
                  l.qZA()()()),
                  2 & oe &&
                    (l.xp6(2),
                    l.Q6J("ngIf", !ue.registerClicked && !ue.loginClicked),
                    l.xp6(1),
                    l.Q6J(
                      "ngIf",
                      ue.registerClicked &&
                        !ue.loginClicked &&
                        !ue.shared.getRegisterFormSubmitted()
                    ),
                    l.xp6(1),
                    l.Q6J(
                      "ngIf",
                      (ue.loginClicked && !ue.registerClicked) ||
                        ue.shared.getRegisterFormSubmitted()
                    ),
                    l.xp6(2),
                    l.Q6J("disabled", ue.registerClicked),
                    l.xp6(2),
                    l.Q6J("disabled", ue.loginClicked));
              },
              dependencies: [ve.O5, Pe, se, ve.gd],
              styles: [
                ".welcomePageWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0 auto;width:80vw;padding-top:20vh}.welcomePageWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem}.buttonWrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;width:35%}",
              ],
            })),
            B
          );
        })(),
        be = (() => {
          class B {
            constructor(oe, ue) {
              (this.loginService = oe), (this.router = ue);
            }
            canActivate(oe, ue) {
              const Et = this.loginService.isLoginSub.getValue();
              return Et || this.router.navigate([""]), Et;
            }
          }
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)(l.LFG(he), l.LFG($.F0));
            }),
            (B.ɵprov = l.Yz7({
              token: B,
              factory: B.ɵfac,
              providedIn: "root",
            })),
            B
          );
        })();
      const fe = [
        { path: "", component: z },
        {
          path: "dashboard",
          loadChildren: () =>
            Promise.resolve()
              .then(S.bind(S, 9715))
              .then((B) => B.DashboardModule),
          canActivate: [be],
        },
        {
          path: "board/:id",
          loadChildren: () =>
            Promise.resolve()
              .then(S.bind(S, 8973))
              .then((B) => B.BoardModule),
          canActivate: [be],
        },
        { path: "**", redirectTo: "/dashboard", pathMatch: "full" },
      ];
      let $e = (() => {
        class B {}
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)();
          }),
          (B.ɵmod = l.oAB({ type: B })),
          (B.ɵinj = l.cJS({
            imports: [$.Bz.forRoot(fe, { preloadingStrategy: $.wm }), $.Bz],
          })),
          B
        );
      })();
      function Xe(B, Se) {
        if ((1 & B && (l.TgZ(0, "h2"), l._uU(1), l.qZA()), 2 & B)) {
          const oe = l.oxw();
          l.xp6(1), l.hij("Hello ", oe.user, "");
        }
      }
      const Zt = function () {
        return ["/dashboard"];
      };
      function Ye(B, Se) {
        1 & B &&
          (l.TgZ(0, "button", 5), l._uU(1, " Back to Dashboard "), l.qZA()),
          2 & B && l.Q6J("routerLink", l.DdM(1, Zt));
      }
      function yt(B, Se) {
        if (1 & B) {
          const oe = l.EpF();
          l.TgZ(0, "button", 6),
            l.NdJ("click", function () {
              l.CHM(oe);
              const Et = l.oxw();
              return l.KtG(Et.loginService.logout());
            }),
            l._uU(1, " Logout "),
            l.qZA();
        }
      }
      let Jt = (() => {
          class B {
            constructor(oe, ue) {
              (this.loginService = oe), (this.router = ue);
            }
            ngOnInit() {
              console.log(this.user),
                this.loginService
                  .getCurrentUser()
                  .subscribe((oe) => (this.user = oe)),
                this.loginService.getUser().subscribe((oe) => {
                  this.loginService.updateCurrentUser(oe.user.username);
                });
            }
          }
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)(l.Y36(he), l.Y36($.F0));
            }),
            (B.ɵcmp = l.Xpm({
              type: B,
              selectors: [["app-header"]],
              decls: 7,
              vars: 7,
              consts: [
                [1, "headerWrapper"],
                [4, "ngIf"],
                [1, "headerButtonWrapper"],
                [3, "routerLink", 4, "ngIf"],
                ["class", "logout", 3, "click", 4, "ngIf"],
                [3, "routerLink"],
                [1, "logout", 3, "click"],
              ],
              template: function (oe, ue) {
                1 & oe &&
                  (l.TgZ(0, "div", 0),
                  l.YNc(1, Xe, 2, 1, "h2", 1),
                  l.ALo(2, "async"),
                  l.TgZ(3, "div", 2),
                  l.YNc(4, Ye, 2, 2, "button", 3),
                  l.YNc(5, yt, 2, 0, "button", 4),
                  l.ALo(6, "async"),
                  l.qZA()()),
                  2 & oe &&
                    (l.xp6(1),
                    l.Q6J("ngIf", l.lcZ(2, 3, ue.loginService.isLogin$())),
                    l.xp6(3),
                    l.Q6J("ngIf", ue.router.url.includes("/board")),
                    l.xp6(1),
                    l.Q6J("ngIf", l.lcZ(6, 5, ue.loginService.isLogin$())));
              },
              dependencies: [ve.O5, $.rH, ve.Ov],
              styles: [
                ".headerWrapper[_ngcontent-%COMP%]{width:100%;min-height:6vh;background-color:#c09ac380;padding:1%;display:flex;justify-content:space-between}.headerButtonWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}h2[_ngcontent-%COMP%]{font-size:1.2em}",
              ],
            })),
            B
          );
        })(),
        bt = (() => {
          class B {}
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)();
            }),
            (B.ɵcmp = l.Xpm({
              type: B,
              selectors: [["app-root"]],
              decls: 2,
              vars: 0,
              template: function (oe, ue) {
                1 & oe && l._UZ(0, "app-header")(1, "router-outlet");
              },
              dependencies: [$.lC, Jt],
            })),
            B
          );
        })(),
        Kt = (() => {
          class B {}
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)();
            }),
            (B.ɵmod = l.oAB({ type: B })),
            (B.ɵinj = l.cJS({ imports: [ve.ez, $.Bz] })),
            B
          );
        })(),
        Ut = (() => {
          class B {}
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)();
            }),
            (B.ɵmod = l.oAB({ type: B })),
            (B.ɵinj = l.cJS({ providers: [ye], imports: [ve.ez, X.u5, X.UX] })),
            B
          );
        })(),
        Mt = (() => {
          class B {}
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)();
            }),
            (B.ɵmod = l.oAB({ type: B })),
            (B.ɵinj = l.cJS({ providers: [he], imports: [ve.ez, X.u5, X.UX] })),
            B
          );
        })(),
        ft = (() => {
          class B {}
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)();
            }),
            (B.ɵmod = l.oAB({ type: B })),
            (B.ɵinj = l.cJS({ imports: [ve.ez, Ut, Mt] })),
            B
          );
        })(),
        ot = (() => {
          class B {
            constructor(oe) {
              this.router = oe;
            }
            intercept(oe, ue) {
              const Et = localStorage.getItem("token");
              return (
                Et &&
                  (oe = oe.clone({
                    headers: oe.headers.set("Authorization", "Bearer " + Et),
                  })),
                oe.headers.has("Content-Type") ||
                  (oe = oe.clone({
                    headers: oe.headers.set("Content-Type", "application/json"),
                  })),
                (oe = oe.clone({
                  headers: oe.headers.set("Access-Control-Allow-Origin", "*"),
                })),
                ue.handle(oe)
              );
            }
          }
          return (
            (B.ɵfac = function (oe) {
              return new (oe || B)(l.LFG($.F0));
            }),
            (B.ɵprov = l.Yz7({ token: B, factory: B.ɵfac })),
            B
          );
        })();
      var Ln = S(9715),
        ne = S(8973);
      const Be = { provide: I.TP, useClass: ot, multi: !0 };
      let W = (() => {
        class B {}
        return (
          (B.ɵfac = function (oe) {
            return new (oe || B)();
          }),
          (B.ɵmod = l.oAB({ type: B, bootstrap: [bt] })),
          (B.ɵinj = l.cJS({
            providers: [Be],
            imports: [
              d.b2,
              $e,
              Kt,
              I.JF,
              ft,
              Ln.DashboardModule,
              $.Bz,
              ne.BoardModule,
            ],
          })),
          B
        );
      })();
      (0, l.G48)(),
        d
          .q6()
          .bootstrapModule(W)
          .catch((B) => console.error(B));
    },
    1135: (je, ce, S) => {
      S.d(ce, { X: () => l });
      var d = S(7579);
      class l extends d.x {
        constructor($) {
          super(), (this._value = $);
        }
        get value() {
          return this.getValue();
        }
        _subscribe($) {
          const G = super._subscribe($);
          return !G.closed && $.next(this._value), G;
        }
        getValue() {
          const { hasError: $, thrownError: G, _value: he } = this;
          if ($) throw G;
          return this._throwIfClosed(), he;
        }
        next($) {
          super.next((this._value = $));
        }
      }
    },
    9751: (je, ce, S) => {
      S.d(ce, { y: () => ve });
      var d = S(2961),
        l = S(727),
        I = S(8822),
        $ = S(9635),
        G = S(2416),
        he = S(576),
        H = S(2806);
      let ve = (() => {
        class Ee {
          constructor(ae) {
            ae && (this._subscribe = ae);
          }
          lift(ae) {
            const Te = new Ee();
            return (Te.source = this), (Te.operator = ae), Te;
          }
          subscribe(ae, Te, Re) {
            const We = (function ie(Ee) {
              return (
                (Ee && Ee instanceof d.Lv) ||
                ((function ye(Ee) {
                  return (
                    Ee &&
                    (0, he.m)(Ee.next) &&
                    (0, he.m)(Ee.error) &&
                    (0, he.m)(Ee.complete)
                  );
                })(Ee) &&
                  (0, l.Nn)(Ee))
              );
            })(ae)
              ? ae
              : new d.Hp(ae, Te, Re);
            return (
              (0, H.x)(() => {
                const { operator: Je, source: vt } = this;
                We.add(
                  Je
                    ? Je.call(We, vt)
                    : vt
                    ? this._subscribe(We)
                    : this._trySubscribe(We)
                );
              }),
              We
            );
          }
          _trySubscribe(ae) {
            try {
              return this._subscribe(ae);
            } catch (Te) {
              ae.error(Te);
            }
          }
          forEach(ae, Te) {
            return new (Te = X(Te))((Re, We) => {
              const Je = new d.Hp({
                next: (vt) => {
                  try {
                    ae(vt);
                  } catch (Pe) {
                    We(Pe), Je.unsubscribe();
                  }
                },
                error: We,
                complete: Re,
              });
              this.subscribe(Je);
            });
          }
          _subscribe(ae) {
            var Te;
            return null === (Te = this.source) || void 0 === Te
              ? void 0
              : Te.subscribe(ae);
          }
          [I.L]() {
            return this;
          }
          pipe(...ae) {
            return (0, $.U)(ae)(this);
          }
          toPromise(ae) {
            return new (ae = X(ae))((Te, Re) => {
              let We;
              this.subscribe(
                (Je) => (We = Je),
                (Je) => Re(Je),
                () => Te(We)
              );
            });
          }
        }
        return (Ee.create = (Ie) => new Ee(Ie)), Ee;
      })();
      function X(Ee) {
        var Ie;
        return null !== (Ie = Ee ?? G.v.Promise) && void 0 !== Ie
          ? Ie
          : Promise;
      }
    },
    7579: (je, ce, S) => {
      S.d(ce, { x: () => H });
      var d = S(9751),
        l = S(727);
      const $ = (0, S(3888).d)(
        (X) =>
          function () {
            X(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var G = S(8737),
        he = S(2806);
      let H = (() => {
        class X extends d.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(ie) {
            const Ee = new ve(this, this);
            return (Ee.operator = ie), Ee;
          }
          _throwIfClosed() {
            if (this.closed) throw new $();
          }
          next(ie) {
            (0, he.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const Ee of this.currentObservers) Ee.next(ie);
              }
            });
          }
          error(ie) {
            (0, he.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = ie);
                const { observers: Ee } = this;
                for (; Ee.length; ) Ee.shift().error(ie);
              }
            });
          }
          complete() {
            (0, he.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: ie } = this;
                for (; ie.length; ) ie.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var ie;
            return (
              (null === (ie = this.observers) || void 0 === ie
                ? void 0
                : ie.length) > 0
            );
          }
          _trySubscribe(ie) {
            return this._throwIfClosed(), super._trySubscribe(ie);
          }
          _subscribe(ie) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(ie),
              this._innerSubscribe(ie)
            );
          }
          _innerSubscribe(ie) {
            const { hasError: Ee, isStopped: Ie, observers: ae } = this;
            return Ee || Ie
              ? l.Lc
              : ((this.currentObservers = null),
                ae.push(ie),
                new l.w0(() => {
                  (this.currentObservers = null), (0, G.P)(ae, ie);
                }));
          }
          _checkFinalizedStatuses(ie) {
            const { hasError: Ee, thrownError: Ie, isStopped: ae } = this;
            Ee ? ie.error(Ie) : ae && ie.complete();
          }
          asObservable() {
            const ie = new d.y();
            return (ie.source = this), ie;
          }
        }
        return (X.create = (ye, ie) => new ve(ye, ie)), X;
      })();
      class ve extends H {
        constructor(ye, ie) {
          super(), (this.destination = ye), (this.source = ie);
        }
        next(ye) {
          var ie, Ee;
          null ===
            (Ee =
              null === (ie = this.destination) || void 0 === ie
                ? void 0
                : ie.next) ||
            void 0 === Ee ||
            Ee.call(ie, ye);
        }
        error(ye) {
          var ie, Ee;
          null ===
            (Ee =
              null === (ie = this.destination) || void 0 === ie
                ? void 0
                : ie.error) ||
            void 0 === Ee ||
            Ee.call(ie, ye);
        }
        complete() {
          var ye, ie;
          null ===
            (ie =
              null === (ye = this.destination) || void 0 === ye
                ? void 0
                : ye.complete) ||
            void 0 === ie ||
            ie.call(ye);
        }
        _subscribe(ye) {
          var ie, Ee;
          return null !==
            (Ee =
              null === (ie = this.source) || void 0 === ie
                ? void 0
                : ie.subscribe(ye)) && void 0 !== Ee
            ? Ee
            : l.Lc;
        }
      }
    },
    2961: (je, ce, S) => {
      S.d(ce, { Hp: () => Re, Lv: () => Ee });
      var d = S(576),
        l = S(727),
        I = S(2416),
        $ = S(7849);
      function G() {}
      const he = X("C", void 0, void 0);
      function X(Oe, Me, q) {
        return { kind: Oe, value: Me, error: q };
      }
      var ye = S(3410),
        ie = S(2806);
      class Ee extends l.w0 {
        constructor(Me) {
          super(),
            (this.isStopped = !1),
            Me
              ? ((this.destination = Me), (0, l.Nn)(Me) && Me.add(this))
              : (this.destination = Pe);
        }
        static create(Me, q, He) {
          return new Re(Me, q, He);
        }
        next(Me) {
          this.isStopped
            ? vt(
                (function ve(Oe) {
                  return X("N", Oe, void 0);
                })(Me),
                this
              )
            : this._next(Me);
        }
        error(Me) {
          this.isStopped
            ? vt(
                (function H(Oe) {
                  return X("E", void 0, Oe);
                })(Me),
                this
              )
            : ((this.isStopped = !0), this._error(Me));
        }
        complete() {
          this.isStopped
            ? vt(he, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(Me) {
          this.destination.next(Me);
        }
        _error(Me) {
          try {
            this.destination.error(Me);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Ie = Function.prototype.bind;
      function ae(Oe, Me) {
        return Ie.call(Oe, Me);
      }
      class Te {
        constructor(Me) {
          this.partialObserver = Me;
        }
        next(Me) {
          const { partialObserver: q } = this;
          if (q.next)
            try {
              q.next(Me);
            } catch (He) {
              We(He);
            }
        }
        error(Me) {
          const { partialObserver: q } = this;
          if (q.error)
            try {
              q.error(Me);
            } catch (He) {
              We(He);
            }
          else We(Me);
        }
        complete() {
          const { partialObserver: Me } = this;
          if (Me.complete)
            try {
              Me.complete();
            } catch (q) {
              We(q);
            }
        }
      }
      class Re extends Ee {
        constructor(Me, q, He) {
          let j;
          if ((super(), (0, d.m)(Me) || !Me))
            j = {
              next: Me ?? void 0,
              error: q ?? void 0,
              complete: He ?? void 0,
            };
          else {
            let Q;
            this && I.v.useDeprecatedNextContext
              ? ((Q = Object.create(Me)),
                (Q.unsubscribe = () => this.unsubscribe()),
                (j = {
                  next: Me.next && ae(Me.next, Q),
                  error: Me.error && ae(Me.error, Q),
                  complete: Me.complete && ae(Me.complete, Q),
                }))
              : (j = Me);
          }
          this.destination = new Te(j);
        }
      }
      function We(Oe) {
        I.v.useDeprecatedSynchronousErrorHandling
          ? (0, ie.O)(Oe)
          : (0, $.h)(Oe);
      }
      function vt(Oe, Me) {
        const { onStoppedNotification: q } = I.v;
        q && ye.z.setTimeout(() => q(Oe, Me));
      }
      const Pe = {
        closed: !0,
        next: G,
        error: function Je(Oe) {
          throw Oe;
        },
        complete: G,
      };
    },
    727: (je, ce, S) => {
      S.d(ce, { Lc: () => he, w0: () => G, Nn: () => H });
      var d = S(576);
      const I = (0, S(3888).d)(
        (X) =>
          function (ie) {
            X(this),
              (this.message = ie
                ? `${ie.length} errors occurred during unsubscription:\n${ie
                    .map((Ee, Ie) => `${Ie + 1}) ${Ee.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = ie);
          }
      );
      var $ = S(8737);
      class G {
        constructor(ye) {
          (this.initialTeardown = ye),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let ye;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: ie } = this;
            if (ie)
              if (((this._parentage = null), Array.isArray(ie)))
                for (const ae of ie) ae.remove(this);
              else ie.remove(this);
            const { initialTeardown: Ee } = this;
            if ((0, d.m)(Ee))
              try {
                Ee();
              } catch (ae) {
                ye = ae instanceof I ? ae.errors : [ae];
              }
            const { _finalizers: Ie } = this;
            if (Ie) {
              this._finalizers = null;
              for (const ae of Ie)
                try {
                  ve(ae);
                } catch (Te) {
                  (ye = ye ?? []),
                    Te instanceof I
                      ? (ye = [...ye, ...Te.errors])
                      : ye.push(Te);
                }
            }
            if (ye) throw new I(ye);
          }
        }
        add(ye) {
          var ie;
          if (ye && ye !== this)
            if (this.closed) ve(ye);
            else {
              if (ye instanceof G) {
                if (ye.closed || ye._hasParent(this)) return;
                ye._addParent(this);
              }
              (this._finalizers =
                null !== (ie = this._finalizers) && void 0 !== ie
                  ? ie
                  : []).push(ye);
            }
        }
        _hasParent(ye) {
          const { _parentage: ie } = this;
          return ie === ye || (Array.isArray(ie) && ie.includes(ye));
        }
        _addParent(ye) {
          const { _parentage: ie } = this;
          this._parentage = Array.isArray(ie)
            ? (ie.push(ye), ie)
            : ie
            ? [ie, ye]
            : ye;
        }
        _removeParent(ye) {
          const { _parentage: ie } = this;
          ie === ye
            ? (this._parentage = null)
            : Array.isArray(ie) && (0, $.P)(ie, ye);
        }
        remove(ye) {
          const { _finalizers: ie } = this;
          ie && (0, $.P)(ie, ye), ye instanceof G && ye._removeParent(this);
        }
      }
      G.EMPTY = (() => {
        const X = new G();
        return (X.closed = !0), X;
      })();
      const he = G.EMPTY;
      function H(X) {
        return (
          X instanceof G ||
          (X &&
            "closed" in X &&
            (0, d.m)(X.remove) &&
            (0, d.m)(X.add) &&
            (0, d.m)(X.unsubscribe))
        );
      }
      function ve(X) {
        (0, d.m)(X) ? X() : X.unsubscribe();
      }
    },
    2416: (je, ce, S) => {
      S.d(ce, { v: () => d });
      const d = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (je, ce, S) => {
      S.d(ce, { E: () => l });
      const l = new (S(9751).y)((G) => G.complete());
    },
    2076: (je, ce, S) => {
      S.d(ce, { D: () => He });
      var d = S(8421),
        l = S(9672),
        I = S(4482),
        $ = S(5403);
      function G(j, Q = 0) {
        return (0, I.e)((se, U) => {
          se.subscribe(
            (0, $.x)(
              U,
              (L) => (0, l.f)(U, j, () => U.next(L), Q),
              () => (0, l.f)(U, j, () => U.complete(), Q),
              (L) => (0, l.f)(U, j, () => U.error(L), Q)
            )
          );
        });
      }
      function he(j, Q = 0) {
        return (0, I.e)((se, U) => {
          U.add(j.schedule(() => se.subscribe(U), Q));
        });
      }
      var X = S(9751),
        ie = S(2202),
        Ee = S(576);
      function ae(j, Q) {
        if (!j) throw new Error("Iterable cannot be null");
        return new X.y((se) => {
          (0, l.f)(se, Q, () => {
            const U = j[Symbol.asyncIterator]();
            (0, l.f)(
              se,
              Q,
              () => {
                U.next().then((L) => {
                  L.done ? se.complete() : se.next(L.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Te = S(3670),
        Re = S(8239),
        We = S(1144),
        Je = S(6495),
        vt = S(2206),
        Pe = S(4532),
        Oe = S(3260);
      function He(j, Q) {
        return Q
          ? (function q(j, Q) {
              if (null != j) {
                if ((0, Te.c)(j))
                  return (function H(j, Q) {
                    return (0, d.Xf)(j).pipe(he(Q), G(Q));
                  })(j, Q);
                if ((0, We.z)(j))
                  return (function ye(j, Q) {
                    return new X.y((se) => {
                      let U = 0;
                      return Q.schedule(function () {
                        U === j.length
                          ? se.complete()
                          : (se.next(j[U++]), se.closed || this.schedule());
                      });
                    });
                  })(j, Q);
                if ((0, Re.t)(j))
                  return (function ve(j, Q) {
                    return (0, d.Xf)(j).pipe(he(Q), G(Q));
                  })(j, Q);
                if ((0, vt.D)(j)) return ae(j, Q);
                if ((0, Je.T)(j))
                  return (function Ie(j, Q) {
                    return new X.y((se) => {
                      let U;
                      return (
                        (0, l.f)(se, Q, () => {
                          (U = j[ie.h]()),
                            (0, l.f)(
                              se,
                              Q,
                              () => {
                                let L, Y;
                                try {
                                  ({ value: L, done: Y } = U.next());
                                } catch (z) {
                                  return void se.error(z);
                                }
                                Y ? se.complete() : se.next(L);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, Ee.m)(U?.return) && U.return()
                      );
                    });
                  })(j, Q);
                if ((0, Oe.L)(j))
                  return (function Me(j, Q) {
                    return ae((0, Oe.Q)(j), Q);
                  })(j, Q);
              }
              throw (0, Pe.z)(j);
            })(j, Q)
          : (0, d.Xf)(j);
      }
    },
    8421: (je, ce, S) => {
      S.d(ce, { Xf: () => Ie });
      var d = S(655),
        l = S(1144),
        I = S(8239),
        $ = S(9751),
        G = S(3670),
        he = S(2206),
        H = S(4532),
        ve = S(6495),
        X = S(3260),
        ye = S(576),
        ie = S(7849),
        Ee = S(8822);
      function Ie(Oe) {
        if (Oe instanceof $.y) return Oe;
        if (null != Oe) {
          if ((0, G.c)(Oe))
            return (function ae(Oe) {
              return new $.y((Me) => {
                const q = Oe[Ee.L]();
                if ((0, ye.m)(q.subscribe)) return q.subscribe(Me);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(Oe);
          if ((0, l.z)(Oe))
            return (function Te(Oe) {
              return new $.y((Me) => {
                for (let q = 0; q < Oe.length && !Me.closed; q++)
                  Me.next(Oe[q]);
                Me.complete();
              });
            })(Oe);
          if ((0, I.t)(Oe))
            return (function Re(Oe) {
              return new $.y((Me) => {
                Oe.then(
                  (q) => {
                    Me.closed || (Me.next(q), Me.complete());
                  },
                  (q) => Me.error(q)
                ).then(null, ie.h);
              });
            })(Oe);
          if ((0, he.D)(Oe)) return Je(Oe);
          if ((0, ve.T)(Oe))
            return (function We(Oe) {
              return new $.y((Me) => {
                for (const q of Oe) if ((Me.next(q), Me.closed)) return;
                Me.complete();
              });
            })(Oe);
          if ((0, X.L)(Oe))
            return (function vt(Oe) {
              return Je((0, X.Q)(Oe));
            })(Oe);
        }
        throw (0, H.z)(Oe);
      }
      function Je(Oe) {
        return new $.y((Me) => {
          (function Pe(Oe, Me) {
            var q, He, j, Q;
            return (0, d.mG)(this, void 0, void 0, function* () {
              try {
                for (q = (0, d.KL)(Oe); !(He = yield q.next()).done; )
                  if ((Me.next(He.value), Me.closed)) return;
              } catch (se) {
                j = { error: se };
              } finally {
                try {
                  He && !He.done && (Q = q.return) && (yield Q.call(q));
                } finally {
                  if (j) throw j.error;
                }
              }
              Me.complete();
            });
          })(Oe, Me).catch((q) => Me.error(q));
        });
      }
    },
    9646: (je, ce, S) => {
      S.d(ce, { of: () => I });
      var d = S(7669),
        l = S(2076);
      function I(...$) {
        const G = (0, d.yG)($);
        return (0, l.D)($, G);
      }
    },
    5403: (je, ce, S) => {
      S.d(ce, { x: () => l });
      var d = S(2961);
      function l($, G, he, H, ve) {
        return new I($, G, he, H, ve);
      }
      class I extends d.Lv {
        constructor(G, he, H, ve, X, ye) {
          super(G),
            (this.onFinalize = X),
            (this.shouldUnsubscribe = ye),
            (this._next = he
              ? function (ie) {
                  try {
                    he(ie);
                  } catch (Ee) {
                    G.error(Ee);
                  }
                }
              : super._next),
            (this._error = ve
              ? function (ie) {
                  try {
                    ve(ie);
                  } catch (Ee) {
                    G.error(Ee);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = H
              ? function () {
                  try {
                    H();
                  } catch (ie) {
                    G.error(ie);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var G;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: he } = this;
            super.unsubscribe(),
              !he &&
                (null === (G = this.onFinalize) ||
                  void 0 === G ||
                  G.call(this));
          }
        }
      }
    },
    4351: (je, ce, S) => {
      S.d(ce, { b: () => I });
      var d = S(5577),
        l = S(576);
      function I($, G) {
        return (0, l.m)(G) ? (0, d.z)($, G, 1) : (0, d.z)($, 1);
      }
    },
    9300: (je, ce, S) => {
      S.d(ce, { h: () => I });
      var d = S(4482),
        l = S(5403);
      function I($, G) {
        return (0, d.e)((he, H) => {
          let ve = 0;
          he.subscribe((0, l.x)(H, (X) => $.call(G, X, ve++) && H.next(X)));
        });
      }
    },
    4004: (je, ce, S) => {
      S.d(ce, { U: () => I });
      var d = S(4482),
        l = S(5403);
      function I($, G) {
        return (0, d.e)((he, H) => {
          let ve = 0;
          he.subscribe(
            (0, l.x)(H, (X) => {
              H.next($.call(G, X, ve++));
            })
          );
        });
      }
    },
    8189: (je, ce, S) => {
      S.d(ce, { J: () => I });
      var d = S(5577),
        l = S(4671);
      function I($ = 1 / 0) {
        return (0, d.z)(l.y, $);
      }
    },
    5577: (je, ce, S) => {
      S.d(ce, { z: () => ve });
      var d = S(4004),
        l = S(8421),
        I = S(4482),
        $ = S(9672),
        G = S(5403),
        H = S(576);
      function ve(X, ye, ie = 1 / 0) {
        return (0, H.m)(ye)
          ? ve(
              (Ee, Ie) =>
                (0, d.U)((ae, Te) => ye(Ee, ae, Ie, Te))((0, l.Xf)(X(Ee, Ie))),
              ie
            )
          : ("number" == typeof ye && (ie = ye),
            (0, I.e)((Ee, Ie) =>
              (function he(X, ye, ie, Ee, Ie, ae, Te, Re) {
                const We = [];
                let Je = 0,
                  vt = 0,
                  Pe = !1;
                const Oe = () => {
                    Pe && !We.length && !Je && ye.complete();
                  },
                  Me = (He) => (Je < Ee ? q(He) : We.push(He)),
                  q = (He) => {
                    ae && ye.next(He), Je++;
                    let j = !1;
                    (0, l.Xf)(ie(He, vt++)).subscribe(
                      (0, G.x)(
                        ye,
                        (Q) => {
                          Ie?.(Q), ae ? Me(Q) : ye.next(Q);
                        },
                        () => {
                          j = !0;
                        },
                        void 0,
                        () => {
                          if (j)
                            try {
                              for (Je--; We.length && Je < Ee; ) {
                                const Q = We.shift();
                                Te ? (0, $.f)(ye, Te, () => q(Q)) : q(Q);
                              }
                              Oe();
                            } catch (Q) {
                              ye.error(Q);
                            }
                        }
                      )
                    );
                  };
                return (
                  X.subscribe(
                    (0, G.x)(ye, Me, () => {
                      (Pe = !0), Oe();
                    })
                  ),
                  () => {
                    Re?.();
                  }
                );
              })(Ee, Ie, X, ie)
            ));
      }
    },
    5698: (je, ce, S) => {
      S.d(ce, { q: () => $ });
      var d = S(515),
        l = S(4482),
        I = S(5403);
      function $(G) {
        return G <= 0
          ? () => d.E
          : (0, l.e)((he, H) => {
              let ve = 0;
              he.subscribe(
                (0, I.x)(H, (X) => {
                  ++ve <= G && (H.next(X), G <= ve && H.complete());
                })
              );
            });
      }
    },
    8505: (je, ce, S) => {
      S.d(ce, { b: () => G });
      var d = S(576),
        l = S(4482),
        I = S(5403),
        $ = S(4671);
      function G(he, H, ve) {
        const X =
          (0, d.m)(he) || H || ve ? { next: he, error: H, complete: ve } : he;
        return X
          ? (0, l.e)((ye, ie) => {
              var Ee;
              null === (Ee = X.subscribe) || void 0 === Ee || Ee.call(X);
              let Ie = !0;
              ye.subscribe(
                (0, I.x)(
                  ie,
                  (ae) => {
                    var Te;
                    null === (Te = X.next) || void 0 === Te || Te.call(X, ae),
                      ie.next(ae);
                  },
                  () => {
                    var ae;
                    (Ie = !1),
                      null === (ae = X.complete) || void 0 === ae || ae.call(X),
                      ie.complete();
                  },
                  (ae) => {
                    var Te;
                    (Ie = !1),
                      null === (Te = X.error) ||
                        void 0 === Te ||
                        Te.call(X, ae),
                      ie.error(ae);
                  },
                  () => {
                    var ae, Te;
                    Ie &&
                      (null === (ae = X.unsubscribe) ||
                        void 0 === ae ||
                        ae.call(X)),
                      null === (Te = X.finalize) || void 0 === Te || Te.call(X);
                  }
                )
              );
            })
          : $.y;
      }
    },
    3410: (je, ce, S) => {
      S.d(ce, { z: () => d });
      const d = {
        setTimeout(l, I, ...$) {
          const { delegate: G } = d;
          return G?.setTimeout
            ? G.setTimeout(l, I, ...$)
            : setTimeout(l, I, ...$);
        },
        clearTimeout(l) {
          const { delegate: I } = d;
          return (I?.clearTimeout || clearTimeout)(l);
        },
        delegate: void 0,
      };
    },
    2202: (je, ce, S) => {
      S.d(ce, { h: () => l });
      const l = (function d() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (je, ce, S) => {
      S.d(ce, { L: () => d });
      const d =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    7669: (je, ce, S) => {
      S.d(ce, { _6: () => he, jO: () => $, yG: () => G });
      var d = S(576);
      function I(H) {
        return H[H.length - 1];
      }
      function $(H) {
        return (0, d.m)(I(H)) ? H.pop() : void 0;
      }
      function G(H) {
        return (function l(H) {
          return H && (0, d.m)(H.schedule);
        })(I(H))
          ? H.pop()
          : void 0;
      }
      function he(H, ve) {
        return "number" == typeof I(H) ? H.pop() : ve;
      }
    },
    4742: (je, ce, S) => {
      S.d(ce, { D: () => G });
      const { isArray: d } = Array,
        { getPrototypeOf: l, prototype: I, keys: $ } = Object;
      function G(H) {
        if (1 === H.length) {
          const ve = H[0];
          if (d(ve)) return { args: ve, keys: null };
          if (
            (function he(H) {
              return H && "object" == typeof H && l(H) === I;
            })(ve)
          ) {
            const X = $(ve);
            return { args: X.map((ye) => ve[ye]), keys: X };
          }
        }
        return { args: H, keys: null };
      }
    },
    8737: (je, ce, S) => {
      function d(l, I) {
        if (l) {
          const $ = l.indexOf(I);
          0 <= $ && l.splice($, 1);
        }
      }
      S.d(ce, { P: () => d });
    },
    3888: (je, ce, S) => {
      function d(l) {
        const $ = l((G) => {
          Error.call(G), (G.stack = new Error().stack);
        });
        return (
          ($.prototype = Object.create(Error.prototype)),
          ($.prototype.constructor = $),
          $
        );
      }
      S.d(ce, { d: () => d });
    },
    1810: (je, ce, S) => {
      function d(l, I) {
        return l.reduce(($, G, he) => (($[G] = I[he]), $), {});
      }
      S.d(ce, { n: () => d });
    },
    2806: (je, ce, S) => {
      S.d(ce, { O: () => $, x: () => I });
      var d = S(2416);
      let l = null;
      function I(G) {
        if (d.v.useDeprecatedSynchronousErrorHandling) {
          const he = !l;
          if ((he && (l = { errorThrown: !1, error: null }), G(), he)) {
            const { errorThrown: H, error: ve } = l;
            if (((l = null), H)) throw ve;
          }
        } else G();
      }
      function $(G) {
        d.v.useDeprecatedSynchronousErrorHandling &&
          l &&
          ((l.errorThrown = !0), (l.error = G));
      }
    },
    9672: (je, ce, S) => {
      function d(l, I, $, G = 0, he = !1) {
        const H = I.schedule(function () {
          $(), he ? l.add(this.schedule(null, G)) : this.unsubscribe();
        }, G);
        if ((l.add(H), !he)) return H;
      }
      S.d(ce, { f: () => d });
    },
    4671: (je, ce, S) => {
      function d(l) {
        return l;
      }
      S.d(ce, { y: () => d });
    },
    1144: (je, ce, S) => {
      S.d(ce, { z: () => d });
      const d = (l) =>
        l && "number" == typeof l.length && "function" != typeof l;
    },
    2206: (je, ce, S) => {
      S.d(ce, { D: () => l });
      var d = S(576);
      function l(I) {
        return Symbol.asyncIterator && (0, d.m)(I?.[Symbol.asyncIterator]);
      }
    },
    576: (je, ce, S) => {
      function d(l) {
        return "function" == typeof l;
      }
      S.d(ce, { m: () => d });
    },
    3670: (je, ce, S) => {
      S.d(ce, { c: () => I });
      var d = S(8822),
        l = S(576);
      function I($) {
        return (0, l.m)($[d.L]);
      }
    },
    6495: (je, ce, S) => {
      S.d(ce, { T: () => I });
      var d = S(2202),
        l = S(576);
      function I($) {
        return (0, l.m)($?.[d.h]);
      }
    },
    8239: (je, ce, S) => {
      S.d(ce, { t: () => l });
      var d = S(576);
      function l(I) {
        return (0, d.m)(I?.then);
      }
    },
    3260: (je, ce, S) => {
      S.d(ce, { L: () => $, Q: () => I });
      var d = S(655),
        l = S(576);
      function I(G) {
        return (0, d.FC)(this, arguments, function* () {
          const H = G.getReader();
          try {
            for (;;) {
              const { value: ve, done: X } = yield (0, d.qq)(H.read());
              if (X) return yield (0, d.qq)(void 0);
              yield yield (0, d.qq)(ve);
            }
          } finally {
            H.releaseLock();
          }
        });
      }
      function $(G) {
        return (0, l.m)(G?.getReader);
      }
    },
    4482: (je, ce, S) => {
      S.d(ce, { A: () => l, e: () => I });
      var d = S(576);
      function l($) {
        return (0, d.m)($?.lift);
      }
      function I($) {
        return (G) => {
          if (l(G))
            return G.lift(function (he) {
              try {
                return $(he, this);
              } catch (H) {
                this.error(H);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (je, ce, S) => {
      S.d(ce, { Z: () => $ });
      var d = S(4004);
      const { isArray: l } = Array;
      function $(G) {
        return (0, d.U)((he) =>
          (function I(G, he) {
            return l(he) ? G(...he) : G(he);
          })(G, he)
        );
      }
    },
    9635: (je, ce, S) => {
      S.d(ce, { U: () => I, z: () => l });
      var d = S(4671);
      function l(...$) {
        return I($);
      }
      function I($) {
        return 0 === $.length
          ? d.y
          : 1 === $.length
          ? $[0]
          : function (he) {
              return $.reduce((H, ve) => ve(H), he);
            };
      }
    },
    7849: (je, ce, S) => {
      S.d(ce, { h: () => I });
      var d = S(2416),
        l = S(3410);
      function I($) {
        l.z.setTimeout(() => {
          const { onUnhandledError: G } = d.v;
          if (!G) throw $;
          G($);
        });
      }
    },
    4532: (je, ce, S) => {
      function d(l) {
        return new TypeError(
          `You provided ${
            null !== l && "object" == typeof l ? "an invalid object" : `'${l}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      S.d(ce, { z: () => d });
    },
    655: (je, ce, S) => {
      function ve(U, L, Y, z) {
        return new (Y || (Y = Promise))(function (fe, $e) {
          function Xe(yt) {
            try {
              Ye(z.next(yt));
            } catch (Jt) {
              $e(Jt);
            }
          }
          function Zt(yt) {
            try {
              Ye(z.throw(yt));
            } catch (Jt) {
              $e(Jt);
            }
          }
          function Ye(yt) {
            yt.done
              ? fe(yt.value)
              : (function be(fe) {
                  return fe instanceof Y
                    ? fe
                    : new Y(function ($e) {
                        $e(fe);
                      });
                })(yt.value).then(Xe, Zt);
          }
          Ye((z = z.apply(U, L || [])).next());
        });
      }
      function We(U) {
        return this instanceof We ? ((this.v = U), this) : new We(U);
      }
      function Je(U, L, Y) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var be,
          z = Y.apply(U, L || []),
          fe = [];
        return (
          (be = {}),
          $e("next"),
          $e("throw"),
          $e("return"),
          (be[Symbol.asyncIterator] = function () {
            return this;
          }),
          be
        );
        function $e(bt) {
          z[bt] &&
            (be[bt] = function (Kt) {
              return new Promise(function (Ut, Mt) {
                fe.push([bt, Kt, Ut, Mt]) > 1 || Xe(bt, Kt);
              });
            });
        }
        function Xe(bt, Kt) {
          try {
            !(function Zt(bt) {
              bt.value instanceof We
                ? Promise.resolve(bt.value.v).then(Ye, yt)
                : Jt(fe[0][2], bt);
            })(z[bt](Kt));
          } catch (Ut) {
            Jt(fe[0][3], Ut);
          }
        }
        function Ye(bt) {
          Xe("next", bt);
        }
        function yt(bt) {
          Xe("throw", bt);
        }
        function Jt(bt, Kt) {
          bt(Kt), fe.shift(), fe.length && Xe(fe[0][0], fe[0][1]);
        }
      }
      function Pe(U) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Y,
          L = U[Symbol.asyncIterator];
        return L
          ? L.call(U)
          : ((U = (function Ee(U) {
              var L = "function" == typeof Symbol && Symbol.iterator,
                Y = L && U[L],
                z = 0;
              if (Y) return Y.call(U);
              if (U && "number" == typeof U.length)
                return {
                  next: function () {
                    return (
                      U && z >= U.length && (U = void 0),
                      { value: U && U[z++], done: !U }
                    );
                  },
                };
              throw new TypeError(
                L
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(U)),
            (Y = {}),
            z("next"),
            z("throw"),
            z("return"),
            (Y[Symbol.asyncIterator] = function () {
              return this;
            }),
            Y);
        function z(fe) {
          Y[fe] =
            U[fe] &&
            function ($e) {
              return new Promise(function (Xe, Zt) {
                !(function be(fe, $e, Xe, Zt) {
                  Promise.resolve(Zt).then(function (Ye) {
                    fe({ value: Ye, done: Xe });
                  }, $e);
                })(Xe, Zt, ($e = U[fe]($e)).done, $e.value);
              });
            };
        }
      }
      S.d(ce, { FC: () => Je, KL: () => Pe, mG: () => ve, qq: () => We });
    },
    6895: (je, ce, S) => {
      S.d(ce, {
        Do: () => Pe,
        EM: () => fo,
        HT: () => G,
        JF: () => xo,
        K0: () => H,
        Mx: () => ur,
        O5: () => Ot,
        Ov: () => so,
        PC: () => un,
        S$: () => We,
        V_: () => ye,
        Ye: () => Oe,
        b0: () => vt,
        bD: () => wr,
        ez: () => Un,
        gd: () => Ti,
        q: () => I,
        sg: () => ln,
        uU: () => ti,
        w_: () => he,
      });
      var d = S(8256);
      let l = null;
      function I() {
        return l;
      }
      function G(g) {
        l || (l = g);
      }
      class he {}
      const H = new d.OlP("DocumentToken");
      let ve = (() => {
        class g {
          historyGo(v) {
            throw new Error("Not implemented");
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)();
          }),
          (g.ɵprov = d.Yz7({
            token: g,
            factory: function () {
              return (function X() {
                return (0, d.LFG)(ie);
              })();
            },
            providedIn: "platform",
          })),
          g
        );
      })();
      const ye = new d.OlP("Location Initialized");
      let ie = (() => {
        class g extends ve {
          constructor(v) {
            super(), (this._doc = v), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return I().getBaseHref(this._doc);
          }
          onPopState(v) {
            const M = I().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("popstate", v, !1),
              () => M.removeEventListener("popstate", v)
            );
          }
          onHashChange(v) {
            const M = I().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("hashchange", v, !1),
              () => M.removeEventListener("hashchange", v)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(v) {
            this.location.pathname = v;
          }
          pushState(v, M, R) {
            Ee() ? this._history.pushState(v, M, R) : (this.location.hash = R);
          }
          replaceState(v, M, R) {
            Ee()
              ? this._history.replaceState(v, M, R)
              : (this.location.hash = R);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(v = 0) {
            this._history.go(v);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)(d.LFG(H));
          }),
          (g.ɵprov = d.Yz7({
            token: g,
            factory: function () {
              return (function Ie() {
                return new ie((0, d.LFG)(H));
              })();
            },
            providedIn: "platform",
          })),
          g
        );
      })();
      function Ee() {
        return !!window.history.pushState;
      }
      function ae(g, b) {
        if (0 == g.length) return b;
        if (0 == b.length) return g;
        let v = 0;
        return (
          g.endsWith("/") && v++,
          b.startsWith("/") && v++,
          2 == v ? g + b.substring(1) : 1 == v ? g + b : g + "/" + b
        );
      }
      function Te(g) {
        const b = g.match(/#|\?|$/),
          v = (b && b.index) || g.length;
        return g.slice(0, v - ("/" === g[v - 1] ? 1 : 0)) + g.slice(v);
      }
      function Re(g) {
        return g && "?" !== g[0] ? "?" + g : g;
      }
      let We = (() => {
        class g {
          historyGo(v) {
            throw new Error("Not implemented");
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)();
          }),
          (g.ɵprov = d.Yz7({
            token: g,
            factory: function () {
              return (0, d.f3M)(vt);
            },
            providedIn: "root",
          })),
          g
        );
      })();
      const Je = new d.OlP("appBaseHref");
      let vt = (() => {
          class g extends We {
            constructor(v, M) {
              super(),
                (this._platformLocation = v),
                (this._removeListenerFns = []),
                (this._baseHref =
                  M ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, d.f3M)(H).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(v) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(v),
                this._platformLocation.onHashChange(v)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(v) {
              return ae(this._baseHref, v);
            }
            path(v = !1) {
              const M =
                  this._platformLocation.pathname +
                  Re(this._platformLocation.search),
                R = this._platformLocation.hash;
              return R && v ? `${M}${R}` : M;
            }
            pushState(v, M, R, te) {
              const _e = this.prepareExternalUrl(R + Re(te));
              this._platformLocation.pushState(v, M, _e);
            }
            replaceState(v, M, R, te) {
              const _e = this.prepareExternalUrl(R + Re(te));
              this._platformLocation.replaceState(v, M, _e);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(v = 0) {
              this._platformLocation.historyGo?.(v);
            }
          }
          return (
            (g.ɵfac = function (v) {
              return new (v || g)(d.LFG(ve), d.LFG(Je, 8));
            }),
            (g.ɵprov = d.Yz7({
              token: g,
              factory: g.ɵfac,
              providedIn: "root",
            })),
            g
          );
        })(),
        Pe = (() => {
          class g extends We {
            constructor(v, M) {
              super(),
                (this._platformLocation = v),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != M && (this._baseHref = M);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(v) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(v),
                this._platformLocation.onHashChange(v)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(v = !1) {
              let M = this._platformLocation.hash;
              return null == M && (M = "#"), M.length > 0 ? M.substring(1) : M;
            }
            prepareExternalUrl(v) {
              const M = ae(this._baseHref, v);
              return M.length > 0 ? "#" + M : M;
            }
            pushState(v, M, R, te) {
              let _e = this.prepareExternalUrl(R + Re(te));
              0 == _e.length && (_e = this._platformLocation.pathname),
                this._platformLocation.pushState(v, M, _e);
            }
            replaceState(v, M, R, te) {
              let _e = this.prepareExternalUrl(R + Re(te));
              0 == _e.length && (_e = this._platformLocation.pathname),
                this._platformLocation.replaceState(v, M, _e);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(v = 0) {
              this._platformLocation.historyGo?.(v);
            }
          }
          return (
            (g.ɵfac = function (v) {
              return new (v || g)(d.LFG(ve), d.LFG(Je, 8));
            }),
            (g.ɵprov = d.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        Oe = (() => {
          class g {
            constructor(v) {
              (this._subject = new d.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = v);
              const M = this._locationStrategy.getBaseHref();
              (this._baseHref = Te(He(M))),
                this._locationStrategy.onPopState((R) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: R.state,
                    type: R.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(v = !1) {
              return this.normalize(this._locationStrategy.path(v));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(v, M = "") {
              return this.path() == this.normalize(v + Re(M));
            }
            normalize(v) {
              return g.stripTrailingSlash(
                (function q(g, b) {
                  return g && b.startsWith(g) ? b.substring(g.length) : b;
                })(this._baseHref, He(v))
              );
            }
            prepareExternalUrl(v) {
              return (
                v && "/" !== v[0] && (v = "/" + v),
                this._locationStrategy.prepareExternalUrl(v)
              );
            }
            go(v, M = "", R = null) {
              this._locationStrategy.pushState(R, "", v, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + Re(M)),
                  R
                );
            }
            replaceState(v, M = "", R = null) {
              this._locationStrategy.replaceState(R, "", v, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + Re(M)),
                  R
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(v = 0) {
              this._locationStrategy.historyGo?.(v);
            }
            onUrlChange(v) {
              return (
                this._urlChangeListeners.push(v),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((M) => {
                    this._notifyUrlChangeListeners(M.url, M.state);
                  })),
                () => {
                  const M = this._urlChangeListeners.indexOf(v);
                  this._urlChangeListeners.splice(M, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(v = "", M) {
              this._urlChangeListeners.forEach((R) => R(v, M));
            }
            subscribe(v, M, R) {
              return this._subject.subscribe({
                next: v,
                error: M,
                complete: R,
              });
            }
          }
          return (
            (g.normalizeQueryParams = Re),
            (g.joinWithSlash = ae),
            (g.stripTrailingSlash = Te),
            (g.ɵfac = function (v) {
              return new (v || g)(d.LFG(We));
            }),
            (g.ɵprov = d.Yz7({
              token: g,
              factory: function () {
                return (function Me() {
                  return new Oe((0, d.LFG)(We));
                })();
              },
              providedIn: "root",
            })),
            g
          );
        })();
      function He(g) {
        return g.replace(/\/index.html$/, "");
      }
      var U = (() => (
          ((U = U || {})[(U.Format = 0)] = "Format"),
          (U[(U.Standalone = 1)] = "Standalone"),
          U
        ))(),
        L = (() => (
          ((L = L || {})[(L.Narrow = 0)] = "Narrow"),
          (L[(L.Abbreviated = 1)] = "Abbreviated"),
          (L[(L.Wide = 2)] = "Wide"),
          (L[(L.Short = 3)] = "Short"),
          L
        ))(),
        Y = (() => (
          ((Y = Y || {})[(Y.Short = 0)] = "Short"),
          (Y[(Y.Medium = 1)] = "Medium"),
          (Y[(Y.Long = 2)] = "Long"),
          (Y[(Y.Full = 3)] = "Full"),
          Y
        ))(),
        z = (() => (
          ((z = z || {})[(z.Decimal = 0)] = "Decimal"),
          (z[(z.Group = 1)] = "Group"),
          (z[(z.List = 2)] = "List"),
          (z[(z.PercentSign = 3)] = "PercentSign"),
          (z[(z.PlusSign = 4)] = "PlusSign"),
          (z[(z.MinusSign = 5)] = "MinusSign"),
          (z[(z.Exponential = 6)] = "Exponential"),
          (z[(z.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
          (z[(z.PerMille = 8)] = "PerMille"),
          (z[(z.Infinity = 9)] = "Infinity"),
          (z[(z.NaN = 10)] = "NaN"),
          (z[(z.TimeSeparator = 11)] = "TimeSeparator"),
          (z[(z.CurrencyDecimal = 12)] = "CurrencyDecimal"),
          (z[(z.CurrencyGroup = 13)] = "CurrencyGroup"),
          z
        ))();
      function bt(g, b) {
        return ue((0, d.cg1)(g)[d.wAp.DateFormat], b);
      }
      function Kt(g, b) {
        return ue((0, d.cg1)(g)[d.wAp.TimeFormat], b);
      }
      function Ut(g, b) {
        return ue((0, d.cg1)(g)[d.wAp.DateTimeFormat], b);
      }
      function Mt(g, b) {
        const v = (0, d.cg1)(g),
          M = v[d.wAp.NumberSymbols][b];
        if (typeof M > "u") {
          if (b === z.CurrencyDecimal) return v[d.wAp.NumberSymbols][z.Decimal];
          if (b === z.CurrencyGroup) return v[d.wAp.NumberSymbols][z.Group];
        }
        return M;
      }
      function Fe(g) {
        if (!g[d.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              g[d.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function ue(g, b) {
        for (let v = b; v > -1; v--) if (typeof g[v] < "u") return g[v];
        throw new Error("Locale data API: locale data undefined");
      }
      function Et(g) {
        const [b, v] = g.split(":");
        return { hours: +b, minutes: +v };
      }
      const kr =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        tn = {},
        me =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var P = (() => (
          ((P = P || {})[(P.Short = 0)] = "Short"),
          (P[(P.ShortGMT = 1)] = "ShortGMT"),
          (P[(P.Long = 2)] = "Long"),
          (P[(P.Extended = 3)] = "Extended"),
          P
        ))(),
        F = (() => (
          ((F = F || {})[(F.FullYear = 0)] = "FullYear"),
          (F[(F.Month = 1)] = "Month"),
          (F[(F.Date = 2)] = "Date"),
          (F[(F.Hours = 3)] = "Hours"),
          (F[(F.Minutes = 4)] = "Minutes"),
          (F[(F.Seconds = 5)] = "Seconds"),
          (F[(F.FractionalSeconds = 6)] = "FractionalSeconds"),
          (F[(F.Day = 7)] = "Day"),
          F
        ))(),
        le = (() => (
          ((le = le || {})[(le.DayPeriods = 0)] = "DayPeriods"),
          (le[(le.Days = 1)] = "Days"),
          (le[(le.Months = 2)] = "Months"),
          (le[(le.Eras = 3)] = "Eras"),
          le
        ))();
      function de(g, b, v, M) {
        let R = (function Zn(g) {
          if (Vn(g)) return g;
          if ("number" == typeof g && !isNaN(g)) return new Date(g);
          if ("string" == typeof g) {
            if (((g = g.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(g))) {
              const [R, te = 1, _e = 1] = g.split("-").map((Le) => +Le);
              return Ue(R, te - 1, _e);
            }
            const v = parseFloat(g);
            if (!isNaN(g - v)) return new Date(v);
            let M;
            if ((M = g.match(kr)))
              return (function Yn(g) {
                const b = new Date(0);
                let v = 0,
                  M = 0;
                const R = g[8] ? b.setUTCFullYear : b.setFullYear,
                  te = g[8] ? b.setUTCHours : b.setHours;
                g[9] &&
                  ((v = Number(g[9] + g[10])), (M = Number(g[9] + g[11]))),
                  R.call(b, Number(g[1]), Number(g[2]) - 1, Number(g[3]));
                const _e = Number(g[4] || 0) - v,
                  Le = Number(g[5] || 0) - M,
                  St = Number(g[6] || 0),
                  wt = Math.floor(1e3 * parseFloat("0." + (g[7] || 0)));
                return te.call(b, _e, Le, St, wt), b;
              })(M);
          }
          const b = new Date(g);
          if (!Vn(b)) throw new Error(`Unable to convert "${g}" into a date`);
          return b;
        })(g);
        b = it(v, b) || b;
        let Le,
          _e = [];
        for (; b; ) {
          if (((Le = me.exec(b)), !Le)) {
            _e.push(b);
            break;
          }
          {
            _e = _e.concat(Le.slice(1));
            const Pt = _e.pop();
            if (!Pt) break;
            b = Pt;
          }
        }
        let St = R.getTimezoneOffset();
        M &&
          ((St = zn(M, St)),
          (R = (function ro(g, b, v) {
            const M = v ? -1 : 1,
              R = g.getTimezoneOffset();
            return (function Wn(g, b) {
              return (
                (g = new Date(g.getTime())).setMinutes(g.getMinutes() + b), g
              );
            })(g, M * (zn(b, R) - R));
          })(R, M, !0)));
        let wt = "";
        return (
          _e.forEach((Pt) => {
            const _t = (function bn(g) {
              if (jt[g]) return jt[g];
              let b;
              switch (g) {
                case "G":
                case "GG":
                case "GGG":
                  b = ze(le.Eras, L.Abbreviated);
                  break;
                case "GGGG":
                  b = ze(le.Eras, L.Wide);
                  break;
                case "GGGGG":
                  b = ze(le.Eras, L.Narrow);
                  break;
                case "y":
                  b = At(F.FullYear, 1, 0, !1, !0);
                  break;
                case "yy":
                  b = At(F.FullYear, 2, 0, !0, !0);
                  break;
                case "yyy":
                  b = At(F.FullYear, 3, 0, !1, !0);
                  break;
                case "yyyy":
                  b = At(F.FullYear, 4, 0, !1, !0);
                  break;
                case "Y":
                  b = mn(1);
                  break;
                case "YY":
                  b = mn(2, !0);
                  break;
                case "YYY":
                  b = mn(3);
                  break;
                case "YYYY":
                  b = mn(4);
                  break;
                case "M":
                case "L":
                  b = At(F.Month, 1, 1);
                  break;
                case "MM":
                case "LL":
                  b = At(F.Month, 2, 1);
                  break;
                case "MMM":
                  b = ze(le.Months, L.Abbreviated);
                  break;
                case "MMMM":
                  b = ze(le.Months, L.Wide);
                  break;
                case "MMMMM":
                  b = ze(le.Months, L.Narrow);
                  break;
                case "LLL":
                  b = ze(le.Months, L.Abbreviated, U.Standalone);
                  break;
                case "LLLL":
                  b = ze(le.Months, L.Wide, U.Standalone);
                  break;
                case "LLLLL":
                  b = ze(le.Months, L.Narrow, U.Standalone);
                  break;
                case "w":
                  b = hn(1);
                  break;
                case "ww":
                  b = hn(2);
                  break;
                case "W":
                  b = hn(1, !0);
                  break;
                case "d":
                  b = At(F.Date, 1);
                  break;
                case "dd":
                  b = At(F.Date, 2);
                  break;
                case "c":
                case "cc":
                  b = At(F.Day, 1);
                  break;
                case "ccc":
                  b = ze(le.Days, L.Abbreviated, U.Standalone);
                  break;
                case "cccc":
                  b = ze(le.Days, L.Wide, U.Standalone);
                  break;
                case "ccccc":
                  b = ze(le.Days, L.Narrow, U.Standalone);
                  break;
                case "cccccc":
                  b = ze(le.Days, L.Short, U.Standalone);
                  break;
                case "E":
                case "EE":
                case "EEE":
                  b = ze(le.Days, L.Abbreviated);
                  break;
                case "EEEE":
                  b = ze(le.Days, L.Wide);
                  break;
                case "EEEEE":
                  b = ze(le.Days, L.Narrow);
                  break;
                case "EEEEEE":
                  b = ze(le.Days, L.Short);
                  break;
                case "a":
                case "aa":
                case "aaa":
                  b = ze(le.DayPeriods, L.Abbreviated);
                  break;
                case "aaaa":
                  b = ze(le.DayPeriods, L.Wide);
                  break;
                case "aaaaa":
                  b = ze(le.DayPeriods, L.Narrow);
                  break;
                case "b":
                case "bb":
                case "bbb":
                  b = ze(le.DayPeriods, L.Abbreviated, U.Standalone, !0);
                  break;
                case "bbbb":
                  b = ze(le.DayPeriods, L.Wide, U.Standalone, !0);
                  break;
                case "bbbbb":
                  b = ze(le.DayPeriods, L.Narrow, U.Standalone, !0);
                  break;
                case "B":
                case "BB":
                case "BBB":
                  b = ze(le.DayPeriods, L.Abbreviated, U.Format, !0);
                  break;
                case "BBBB":
                  b = ze(le.DayPeriods, L.Wide, U.Format, !0);
                  break;
                case "BBBBB":
                  b = ze(le.DayPeriods, L.Narrow, U.Format, !0);
                  break;
                case "h":
                  b = At(F.Hours, 1, -12);
                  break;
                case "hh":
                  b = At(F.Hours, 2, -12);
                  break;
                case "H":
                  b = At(F.Hours, 1);
                  break;
                case "HH":
                  b = At(F.Hours, 2);
                  break;
                case "m":
                  b = At(F.Minutes, 1);
                  break;
                case "mm":
                  b = At(F.Minutes, 2);
                  break;
                case "s":
                  b = At(F.Seconds, 1);
                  break;
                case "ss":
                  b = At(F.Seconds, 2);
                  break;
                case "S":
                  b = At(F.FractionalSeconds, 1);
                  break;
                case "SS":
                  b = At(F.FractionalSeconds, 2);
                  break;
                case "SSS":
                  b = At(F.FractionalSeconds, 3);
                  break;
                case "Z":
                case "ZZ":
                case "ZZZ":
                  b = Tt(P.Short);
                  break;
                case "ZZZZZ":
                  b = Tt(P.Extended);
                  break;
                case "O":
                case "OO":
                case "OOO":
                case "z":
                case "zz":
                case "zzz":
                  b = Tt(P.ShortGMT);
                  break;
                case "OOOO":
                case "ZZZZ":
                case "zzzz":
                  b = Tt(P.Long);
                  break;
                default:
                  return null;
              }
              return (jt[g] = b), b;
            })(Pt);
            wt += _t
              ? _t(R, v, St)
              : "''" === Pt
              ? "'"
              : Pt.replace(/(^'|'$)/g, "").replace(/''/g, "'");
          }),
          wt
        );
      }
      function Ue(g, b, v) {
        const M = new Date(0);
        return M.setFullYear(g, b, v), M.setHours(0, 0, 0), M;
      }
      function it(g, b) {
        const v = (function fe(g) {
          return (0, d.cg1)(g)[d.wAp.LocaleId];
        })(g);
        if (((tn[v] = tn[v] || {}), tn[v][b])) return tn[v][b];
        let M = "";
        switch (b) {
          case "shortDate":
            M = bt(g, Y.Short);
            break;
          case "mediumDate":
            M = bt(g, Y.Medium);
            break;
          case "longDate":
            M = bt(g, Y.Long);
            break;
          case "fullDate":
            M = bt(g, Y.Full);
            break;
          case "shortTime":
            M = Kt(g, Y.Short);
            break;
          case "mediumTime":
            M = Kt(g, Y.Medium);
            break;
          case "longTime":
            M = Kt(g, Y.Long);
            break;
          case "fullTime":
            M = Kt(g, Y.Full);
            break;
          case "short":
            const R = it(g, "shortTime"),
              te = it(g, "shortDate");
            M = Dt(Ut(g, Y.Short), [R, te]);
            break;
          case "medium":
            const _e = it(g, "mediumTime"),
              Le = it(g, "mediumDate");
            M = Dt(Ut(g, Y.Medium), [_e, Le]);
            break;
          case "long":
            const St = it(g, "longTime"),
              wt = it(g, "longDate");
            M = Dt(Ut(g, Y.Long), [St, wt]);
            break;
          case "full":
            const Pt = it(g, "fullTime"),
              _t = it(g, "fullDate");
            M = Dt(Ut(g, Y.Full), [Pt, _t]);
        }
        return M && (tn[v][b] = M), M;
      }
      function Dt(g, b) {
        return (
          b &&
            (g = g.replace(/\{([^}]+)}/g, function (v, M) {
              return null != b && M in b ? b[M] : v;
            })),
          g
        );
      }
      function Ze(g, b, v = "-", M, R) {
        let te = "";
        (g < 0 || (R && g <= 0)) && (R ? (g = 1 - g) : ((g = -g), (te = v)));
        let _e = String(g);
        for (; _e.length < b; ) _e = "0" + _e;
        return M && (_e = _e.slice(_e.length - b)), te + _e;
      }
      function At(g, b, v = 0, M = !1, R = !1) {
        return function (te, _e) {
          let Le = (function nn(g, b) {
            switch (g) {
              case F.FullYear:
                return b.getFullYear();
              case F.Month:
                return b.getMonth();
              case F.Date:
                return b.getDate();
              case F.Hours:
                return b.getHours();
              case F.Minutes:
                return b.getMinutes();
              case F.Seconds:
                return b.getSeconds();
              case F.FractionalSeconds:
                return b.getMilliseconds();
              case F.Day:
                return b.getDay();
              default:
                throw new Error(`Unknown DateType value "${g}".`);
            }
          })(g, te);
          if (((v > 0 || Le > -v) && (Le += v), g === F.Hours))
            0 === Le && -12 === v && (Le = 12);
          else if (g === F.FractionalSeconds)
            return (function $t(g, b) {
              return Ze(g, 3).substring(0, b);
            })(Le, b);
          const St = Mt(_e, z.MinusSign);
          return Ze(Le, b, St, M, R);
        };
      }
      function ze(g, b, v = U.Format, M = !1) {
        return function (R, te) {
          return (function Vt(g, b, v, M, R, te) {
            switch (v) {
              case le.Months:
                return (function Zt(g, b, v) {
                  const M = (0, d.cg1)(g),
                    te = ue(
                      [M[d.wAp.MonthsFormat], M[d.wAp.MonthsStandalone]],
                      b
                    );
                  return ue(te, v);
                })(b, R, M)[g.getMonth()];
              case le.Days:
                return (function Xe(g, b, v) {
                  const M = (0, d.cg1)(g),
                    te = ue([M[d.wAp.DaysFormat], M[d.wAp.DaysStandalone]], b);
                  return ue(te, v);
                })(b, R, M)[g.getDay()];
              case le.DayPeriods:
                const _e = g.getHours(),
                  Le = g.getMinutes();
                if (te) {
                  const wt = (function B(g) {
                      const b = (0, d.cg1)(g);
                      return (
                        Fe(b),
                        (b[d.wAp.ExtraData][2] || []).map((M) =>
                          "string" == typeof M ? Et(M) : [Et(M[0]), Et(M[1])]
                        )
                      );
                    })(b),
                    Pt = (function Se(g, b, v) {
                      const M = (0, d.cg1)(g);
                      Fe(M);
                      const te =
                        ue([M[d.wAp.ExtraData][0], M[d.wAp.ExtraData][1]], b) ||
                        [];
                      return ue(te, v) || [];
                    })(b, R, M),
                    _t = wt.findIndex((mt) => {
                      if (Array.isArray(mt)) {
                        const [Ct, pt] = mt,
                          rr = _e >= Ct.hours && Le >= Ct.minutes,
                          In =
                            _e < pt.hours ||
                            (_e === pt.hours && Le < pt.minutes);
                        if (Ct.hours < pt.hours) {
                          if (rr && In) return !0;
                        } else if (rr || In) return !0;
                      } else if (mt.hours === _e && mt.minutes === Le)
                        return !0;
                      return !1;
                    });
                  if (-1 !== _t) return Pt[_t];
                }
                return (function $e(g, b, v) {
                  const M = (0, d.cg1)(g),
                    te = ue(
                      [
                        M[d.wAp.DayPeriodsFormat],
                        M[d.wAp.DayPeriodsStandalone],
                      ],
                      b
                    );
                  return ue(te, v);
                })(b, R, M)[_e < 12 ? 0 : 1];
              case le.Eras:
                return (function Ye(g, b) {
                  return ue((0, d.cg1)(g)[d.wAp.Eras], b);
                })(b, M)[g.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${v}`);
            }
          })(R, te, g, b, v, M);
        };
      }
      function Tt(g) {
        return function (b, v, M) {
          const R = -1 * M,
            te = Mt(v, z.MinusSign),
            _e = R > 0 ? Math.floor(R / 60) : Math.ceil(R / 60);
          switch (g) {
            case P.Short:
              return (
                (R >= 0 ? "+" : "") +
                Ze(_e, 2, te) +
                Ze(Math.abs(R % 60), 2, te)
              );
            case P.ShortGMT:
              return "GMT" + (R >= 0 ? "+" : "") + Ze(_e, 1, te);
            case P.Long:
              return (
                "GMT" +
                (R >= 0 ? "+" : "") +
                Ze(_e, 2, te) +
                ":" +
                Ze(Math.abs(R % 60), 2, te)
              );
            case P.Extended:
              return 0 === M
                ? "Z"
                : (R >= 0 ? "+" : "") +
                    Ze(_e, 2, te) +
                    ":" +
                    Ze(Math.abs(R % 60), 2, te);
            default:
              throw new Error(`Unknown zone width "${g}"`);
          }
        };
      }
      function tt(g) {
        return Ue(
          g.getFullYear(),
          g.getMonth(),
          g.getDate() + (4 - g.getDay())
        );
      }
      function hn(g, b = !1) {
        return function (v, M) {
          let R;
          if (b) {
            const te = new Date(v.getFullYear(), v.getMonth(), 1).getDay() - 1,
              _e = v.getDate();
            R = 1 + Math.floor((_e + te) / 7);
          } else {
            const te = tt(v),
              _e = (function Ft(g) {
                const b = Ue(g, 0, 1).getDay();
                return Ue(g, 0, 1 + (b <= 4 ? 4 : 11) - b);
              })(te.getFullYear()),
              Le = te.getTime() - _e.getTime();
            R = 1 + Math.round(Le / 6048e5);
          }
          return Ze(R, g, Mt(M, z.MinusSign));
        };
      }
      function mn(g, b = !1) {
        return function (v, M) {
          return Ze(tt(v).getFullYear(), g, Mt(M, z.MinusSign), b);
        };
      }
      const jt = {};
      function zn(g, b) {
        g = g.replace(/:/g, "");
        const v = Date.parse("Jan 01, 1970 00:00:00 " + g) / 6e4;
        return isNaN(v) ? b : v;
      }
      function Vn(g) {
        return g instanceof Date && !isNaN(g.valueOf());
      }
      function ur(g, b) {
        b = encodeURIComponent(b);
        for (const v of g.split(";")) {
          const M = v.indexOf("="),
            [R, te] = -1 == M ? [v, ""] : [v.slice(0, M), v.slice(M + 1)];
          if (R.trim() === b) return decodeURIComponent(te);
        }
        return null;
      }
      class Jn {
        constructor(b, v, M, R) {
          (this.$implicit = b),
            (this.ngForOf = v),
            (this.index = M),
            (this.count = R);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ln = (() => {
        class g {
          constructor(v, M, R) {
            (this._viewContainer = v),
              (this._template = M),
              (this._differs = R),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(v) {
            (this._ngForOf = v), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(v) {
            this._trackByFn = v;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(v) {
            v && (this._template = v);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const v = this._ngForOf;
              !this._differ &&
                v &&
                (this._differ = this._differs
                  .find(v)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const v = this._differ.diff(this._ngForOf);
              v && this._applyChanges(v);
            }
          }
          _applyChanges(v) {
            const M = this._viewContainer;
            v.forEachOperation((R, te, _e) => {
              if (null == R.previousIndex)
                M.createEmbeddedView(
                  this._template,
                  new Jn(R.item, this._ngForOf, -1, -1),
                  null === _e ? void 0 : _e
                );
              else if (null == _e) M.remove(null === te ? void 0 : te);
              else if (null !== te) {
                const Le = M.get(te);
                M.move(Le, _e), Kn(Le, R);
              }
            });
            for (let R = 0, te = M.length; R < te; R++) {
              const Le = M.get(R).context;
              (Le.index = R), (Le.count = te), (Le.ngForOf = this._ngForOf);
            }
            v.forEachIdentityChange((R) => {
              Kn(M.get(R.currentIndex), R);
            });
          }
          static ngTemplateContextGuard(v, M) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)(d.Y36(d.s_b), d.Y36(d.Rgc), d.Y36(d.ZZ4));
          }),
          (g.ɵdir = d.lG2({
            type: g,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          })),
          g
        );
      })();
      function Kn(g, b) {
        g.context.$implicit = b.item;
      }
      let Ot = (() => {
        class g {
          constructor(v, M) {
            (this._viewContainer = v),
              (this._context = new Dr()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = M);
          }
          set ngIf(v) {
            (this._context.$implicit = this._context.ngIf = v),
              this._updateView();
          }
          set ngIfThen(v) {
            Cr("ngIfThen", v),
              (this._thenTemplateRef = v),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(v) {
            Cr("ngIfElse", v),
              (this._elseTemplateRef = v),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(v, M) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)(d.Y36(d.s_b), d.Y36(d.Rgc));
          }),
          (g.ɵdir = d.lG2({
            type: g,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          g
        );
      })();
      class Dr {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Cr(g, b) {
        if (b && !b.createEmbeddedView)
          throw new Error(
            `${g} must be a TemplateRef, but received '${(0, d.AaK)(b)}'.`
          );
      }
      let un = (() => {
        class g {
          constructor(v, M, R) {
            (this._ngEl = v),
              (this._differs = M),
              (this._renderer = R),
              (this._ngStyle = null),
              (this._differ = null);
          }
          set ngStyle(v) {
            (this._ngStyle = v),
              !this._differ &&
                v &&
                (this._differ = this._differs.find(v).create());
          }
          ngDoCheck() {
            if (this._differ) {
              const v = this._differ.diff(this._ngStyle);
              v && this._applyChanges(v);
            }
          }
          _setStyle(v, M) {
            const [R, te] = v.split("."),
              _e = -1 === R.indexOf("-") ? void 0 : d.JOm.DashCase;
            null != M
              ? this._renderer.setStyle(
                  this._ngEl.nativeElement,
                  R,
                  te ? `${M}${te}` : M,
                  _e
                )
              : this._renderer.removeStyle(this._ngEl.nativeElement, R, _e);
          }
          _applyChanges(v) {
            v.forEachRemovedItem((M) => this._setStyle(M.key, null)),
              v.forEachAddedItem((M) => this._setStyle(M.key, M.currentValue)),
              v.forEachChangedItem((M) =>
                this._setStyle(M.key, M.currentValue)
              );
          }
        }
        return (
          (g.ɵfac = function (v) {
            return new (v || g)(d.Y36(d.SBq), d.Y36(d.aQg), d.Y36(d.Qsj));
          }),
          (g.ɵdir = d.lG2({
            type: g,
            selectors: [["", "ngStyle", ""]],
            inputs: { ngStyle: "ngStyle" },
            standalone: !0,
          })),
          g
        );
      })();
      function zt(g, b) {
        return new d.vHH(2100, !1);
      }
      class Xn {
        createSubscription(b, v) {
          return b.subscribe({
            next: v,
            error: (M) => {
              throw M;
            },
          });
        }
        dispose(b) {
          b.unsubscribe();
        }
      }
      class _n {
        createSubscription(b, v) {
          return b.then(v, (M) => {
            throw M;
          });
        }
        dispose(b) {}
      }
      const Mo = new _n(),
        So = new Xn();
      let so = (() => {
          class g {
            constructor(v) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = v);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(v) {
              return this._obj
                ? v !== this._obj
                  ? (this._dispose(), this.transform(v))
                  : this._latestValue
                : (v && this._subscribe(v), this._latestValue);
            }
            _subscribe(v) {
              (this._obj = v),
                (this._strategy = this._selectStrategy(v)),
                (this._subscription = this._strategy.createSubscription(
                  v,
                  (M) => this._updateLatestValue(v, M)
                ));
            }
            _selectStrategy(v) {
              if ((0, d.QGY)(v)) return Mo;
              if ((0, d.F4k)(v)) return So;
              throw zt();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(v, M) {
              v === this._obj &&
                ((this._latestValue = M), this._ref.markForCheck());
            }
          }
          return (
            (g.ɵfac = function (v) {
              return new (v || g)(d.Y36(d.sBO, 16));
            }),
            (g.ɵpipe = d.Yjl({
              name: "async",
              type: g,
              pure: !1,
              standalone: !0,
            })),
            g
          );
        })(),
        Ti = (() => {
          class g {
            transform(v) {
              if (null == v) return null;
              if ("string" != typeof v) throw zt();
              return v.toUpperCase();
            }
          }
          return (
            (g.ɵfac = function (v) {
              return new (v || g)();
            }),
            (g.ɵpipe = d.Yjl({
              name: "uppercase",
              type: g,
              pure: !0,
              standalone: !0,
            })),
            g
          );
        })();
      const ei = new d.OlP("DATE_PIPE_DEFAULT_TIMEZONE");
      let ti = (() => {
          class g {
            constructor(v, M) {
              (this.locale = v), (this.defaultTimezone = M);
            }
            transform(v, M = "mediumDate", R, te) {
              if (null == v || "" === v || v != v) return null;
              try {
                return de(
                  v,
                  M,
                  te || this.locale,
                  R ?? this.defaultTimezone ?? void 0
                );
              } catch (_e) {
                throw zt();
              }
            }
          }
          return (
            (g.ɵfac = function (v) {
              return new (v || g)(d.Y36(d.soG, 16), d.Y36(ei, 24));
            }),
            (g.ɵpipe = d.Yjl({
              name: "date",
              type: g,
              pure: !0,
              standalone: !0,
            })),
            g
          );
        })(),
        Un = (() => {
          class g {}
          return (
            (g.ɵfac = function (v) {
              return new (v || g)();
            }),
            (g.ɵmod = d.oAB({ type: g })),
            (g.ɵinj = d.cJS({})),
            g
          );
        })();
      const wr = "browser";
      let fo = (() => {
        class g {}
        return (
          (g.ɵprov = (0, d.Yz7)({
            token: g,
            providedIn: "root",
            factory: () => new cn((0, d.LFG)(H), window),
          })),
          g
        );
      })();
      class cn {
        constructor(b, v) {
          (this.document = b), (this.window = v), (this.offset = () => [0, 0]);
        }
        setOffset(b) {
          this.offset = Array.isArray(b) ? () => b : b;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(b) {
          this.supportsScrolling() && this.window.scrollTo(b[0], b[1]);
        }
        scrollToAnchor(b) {
          if (!this.supportsScrolling()) return;
          const v = (function ho(g, b) {
            const v = g.getElementById(b) || g.getElementsByName(b)[0];
            if (v) return v;
            if (
              "function" == typeof g.createTreeWalker &&
              g.body &&
              (g.body.createShadowRoot || g.body.attachShadow)
            ) {
              const M = g.createTreeWalker(g.body, NodeFilter.SHOW_ELEMENT);
              let R = M.currentNode;
              for (; R; ) {
                const te = R.shadowRoot;
                if (te) {
                  const _e =
                    te.getElementById(b) || te.querySelector(`[name="${b}"]`);
                  if (_e) return _e;
                }
                R = M.nextNode();
              }
            }
            return null;
          })(this.document, b);
          v && (this.scrollToElement(v), v.focus());
        }
        setHistoryScrollRestoration(b) {
          if (this.supportScrollRestoration()) {
            const v = this.window.history;
            v && v.scrollRestoration && (v.scrollRestoration = b);
          }
        }
        scrollToElement(b) {
          const v = b.getBoundingClientRect(),
            M = v.left + this.window.pageXOffset,
            R = v.top + this.window.pageYOffset,
            te = this.offset();
          this.window.scrollTo(M - te[0], R - te[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const b =
              fr(this.window.history) ||
              fr(Object.getPrototypeOf(this.window.history));
            return !(!b || (!b.writable && !b.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function fr(g) {
        return Object.getOwnPropertyDescriptor(g, "scrollRestoration");
      }
      class xo {}
    },
    529: (je, ce, S) => {
      S.d(ce, { JF: () => It, TP: () => Xe, eN: () => fe });
      var d = S(6895),
        l = S(8256),
        I = S(9646),
        $ = S(9751),
        G = S(4351),
        he = S(9300),
        H = S(4004);
      class ve {}
      class X {}
      class ye {
        constructor(P) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            P
              ? (this.lazyInit =
                  "string" == typeof P
                    ? () => {
                        (this.headers = new Map()),
                          P.split("\n").forEach((F) => {
                            const le = F.indexOf(":");
                            if (le > 0) {
                              const de = F.slice(0, le),
                                Ue = de.toLowerCase(),
                                it = F.slice(le + 1).trim();
                              this.maybeSetNormalizedName(de, Ue),
                                this.headers.has(Ue)
                                  ? this.headers.get(Ue).push(it)
                                  : this.headers.set(Ue, [it]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(P).forEach((F) => {
                            let le = P[F];
                            const de = F.toLowerCase();
                            "string" == typeof le && (le = [le]),
                              le.length > 0 &&
                                (this.headers.set(de, le),
                                this.maybeSetNormalizedName(F, de));
                          });
                      })
              : (this.headers = new Map());
        }
        has(P) {
          return this.init(), this.headers.has(P.toLowerCase());
        }
        get(P) {
          this.init();
          const F = this.headers.get(P.toLowerCase());
          return F && F.length > 0 ? F[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(P) {
          return this.init(), this.headers.get(P.toLowerCase()) || null;
        }
        append(P, F) {
          return this.clone({ name: P, value: F, op: "a" });
        }
        set(P, F) {
          return this.clone({ name: P, value: F, op: "s" });
        }
        delete(P, F) {
          return this.clone({ name: P, value: F, op: "d" });
        }
        maybeSetNormalizedName(P, F) {
          this.normalizedNames.has(F) || this.normalizedNames.set(F, P);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof ye
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((P) => this.applyUpdate(P)),
              (this.lazyUpdate = null)));
        }
        copyFrom(P) {
          P.init(),
            Array.from(P.headers.keys()).forEach((F) => {
              this.headers.set(F, P.headers.get(F)),
                this.normalizedNames.set(F, P.normalizedNames.get(F));
            });
        }
        clone(P) {
          const F = new ye();
          return (
            (F.lazyInit =
              this.lazyInit && this.lazyInit instanceof ye
                ? this.lazyInit
                : this),
            (F.lazyUpdate = (this.lazyUpdate || []).concat([P])),
            F
          );
        }
        applyUpdate(P) {
          const F = P.name.toLowerCase();
          switch (P.op) {
            case "a":
            case "s":
              let le = P.value;
              if (("string" == typeof le && (le = [le]), 0 === le.length))
                return;
              this.maybeSetNormalizedName(P.name, F);
              const de = ("a" === P.op ? this.headers.get(F) : void 0) || [];
              de.push(...le), this.headers.set(F, de);
              break;
            case "d":
              const Ue = P.value;
              if (Ue) {
                let it = this.headers.get(F);
                if (!it) return;
                (it = it.filter((Dt) => -1 === Ue.indexOf(Dt))),
                  0 === it.length
                    ? (this.headers.delete(F), this.normalizedNames.delete(F))
                    : this.headers.set(F, it);
              } else this.headers.delete(F), this.normalizedNames.delete(F);
          }
        }
        forEach(P) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((F) =>
              P(this.normalizedNames.get(F), this.headers.get(F))
            );
        }
      }
      class Ee {
        encodeKey(P) {
          return Re(P);
        }
        encodeValue(P) {
          return Re(P);
        }
        decodeKey(P) {
          return decodeURIComponent(P);
        }
        decodeValue(P) {
          return decodeURIComponent(P);
        }
      }
      const ae = /%(\d[a-f0-9])/gi,
        Te = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function Re(me) {
        return encodeURIComponent(me).replace(ae, (P, F) => Te[F] ?? P);
      }
      function We(me) {
        return `${me}`;
      }
      class Je {
        constructor(P = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = P.encoder || new Ee()),
            P.fromString)
          ) {
            if (P.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function Ie(me, P) {
              const F = new Map();
              return (
                me.length > 0 &&
                  me
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((de) => {
                      const Ue = de.indexOf("="),
                        [it, Dt] =
                          -1 == Ue
                            ? [P.decodeKey(de), ""]
                            : [
                                P.decodeKey(de.slice(0, Ue)),
                                P.decodeValue(de.slice(Ue + 1)),
                              ],
                        Ze = F.get(it) || [];
                      Ze.push(Dt), F.set(it, Ze);
                    }),
                F
              );
            })(P.fromString, this.encoder);
          } else
            P.fromObject
              ? ((this.map = new Map()),
                Object.keys(P.fromObject).forEach((F) => {
                  const le = P.fromObject[F],
                    de = Array.isArray(le) ? le.map(We) : [We(le)];
                  this.map.set(F, de);
                }))
              : (this.map = null);
        }
        has(P) {
          return this.init(), this.map.has(P);
        }
        get(P) {
          this.init();
          const F = this.map.get(P);
          return F ? F[0] : null;
        }
        getAll(P) {
          return this.init(), this.map.get(P) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(P, F) {
          return this.clone({ param: P, value: F, op: "a" });
        }
        appendAll(P) {
          const F = [];
          return (
            Object.keys(P).forEach((le) => {
              const de = P[le];
              Array.isArray(de)
                ? de.forEach((Ue) => {
                    F.push({ param: le, value: Ue, op: "a" });
                  })
                : F.push({ param: le, value: de, op: "a" });
            }),
            this.clone(F)
          );
        }
        set(P, F) {
          return this.clone({ param: P, value: F, op: "s" });
        }
        delete(P, F) {
          return this.clone({ param: P, value: F, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((P) => {
                const F = this.encoder.encodeKey(P);
                return this.map
                  .get(P)
                  .map((le) => F + "=" + this.encoder.encodeValue(le))
                  .join("&");
              })
              .filter((P) => "" !== P)
              .join("&")
          );
        }
        clone(P) {
          const F = new Je({ encoder: this.encoder });
          return (
            (F.cloneFrom = this.cloneFrom || this),
            (F.updates = (this.updates || []).concat(P)),
            F
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((P) => this.map.set(P, this.cloneFrom.map.get(P))),
              this.updates.forEach((P) => {
                switch (P.op) {
                  case "a":
                  case "s":
                    const F =
                      ("a" === P.op ? this.map.get(P.param) : void 0) || [];
                    F.push(We(P.value)), this.map.set(P.param, F);
                    break;
                  case "d":
                    if (void 0 === P.value) {
                      this.map.delete(P.param);
                      break;
                    }
                    {
                      let le = this.map.get(P.param) || [];
                      const de = le.indexOf(We(P.value));
                      -1 !== de && le.splice(de, 1),
                        le.length > 0
                          ? this.map.set(P.param, le)
                          : this.map.delete(P.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class Pe {
        constructor() {
          this.map = new Map();
        }
        set(P, F) {
          return this.map.set(P, F), this;
        }
        get(P) {
          return (
            this.map.has(P) || this.map.set(P, P.defaultValue()),
            this.map.get(P)
          );
        }
        delete(P) {
          return this.map.delete(P), this;
        }
        has(P) {
          return this.map.has(P);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Me(me) {
        return typeof ArrayBuffer < "u" && me instanceof ArrayBuffer;
      }
      function q(me) {
        return typeof Blob < "u" && me instanceof Blob;
      }
      function He(me) {
        return typeof FormData < "u" && me instanceof FormData;
      }
      class Q {
        constructor(P, F, le, de) {
          let Ue;
          if (
            ((this.url = F),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = P.toUpperCase()),
            (function Oe(me) {
              switch (me) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || de
              ? ((this.body = void 0 !== le ? le : null), (Ue = de))
              : (Ue = le),
            Ue &&
              ((this.reportProgress = !!Ue.reportProgress),
              (this.withCredentials = !!Ue.withCredentials),
              Ue.responseType && (this.responseType = Ue.responseType),
              Ue.headers && (this.headers = Ue.headers),
              Ue.context && (this.context = Ue.context),
              Ue.params && (this.params = Ue.params)),
            this.headers || (this.headers = new ye()),
            this.context || (this.context = new Pe()),
            this.params)
          ) {
            const it = this.params.toString();
            if (0 === it.length) this.urlWithParams = F;
            else {
              const Dt = F.indexOf("?");
              this.urlWithParams =
                F + (-1 === Dt ? "?" : Dt < F.length - 1 ? "&" : "") + it;
            }
          } else (this.params = new Je()), (this.urlWithParams = F);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Me(this.body) ||
              q(this.body) ||
              He(this.body) ||
              (function j(me) {
                return (
                  typeof URLSearchParams < "u" && me instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Je
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || He(this.body)
            ? null
            : q(this.body)
            ? this.body.type || null
            : Me(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Je
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(P = {}) {
          const F = P.method || this.method,
            le = P.url || this.url,
            de = P.responseType || this.responseType,
            Ue = void 0 !== P.body ? P.body : this.body,
            it =
              void 0 !== P.withCredentials
                ? P.withCredentials
                : this.withCredentials,
            Dt =
              void 0 !== P.reportProgress
                ? P.reportProgress
                : this.reportProgress;
          let Ze = P.headers || this.headers,
            $t = P.params || this.params;
          const At = P.context ?? this.context;
          return (
            void 0 !== P.setHeaders &&
              (Ze = Object.keys(P.setHeaders).reduce(
                (nn, ze) => nn.set(ze, P.setHeaders[ze]),
                Ze
              )),
            P.setParams &&
              ($t = Object.keys(P.setParams).reduce(
                (nn, ze) => nn.set(ze, P.setParams[ze]),
                $t
              )),
            new Q(F, le, Ue, {
              params: $t,
              headers: Ze,
              context: At,
              reportProgress: Dt,
              responseType: de,
              withCredentials: it,
            })
          );
        }
      }
      var se = (() => (
        ((se = se || {})[(se.Sent = 0)] = "Sent"),
        (se[(se.UploadProgress = 1)] = "UploadProgress"),
        (se[(se.ResponseHeader = 2)] = "ResponseHeader"),
        (se[(se.DownloadProgress = 3)] = "DownloadProgress"),
        (se[(se.Response = 4)] = "Response"),
        (se[(se.User = 5)] = "User"),
        se
      ))();
      class U {
        constructor(P, F = 200, le = "OK") {
          (this.headers = P.headers || new ye()),
            (this.status = void 0 !== P.status ? P.status : F),
            (this.statusText = P.statusText || le),
            (this.url = P.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class L extends U {
        constructor(P = {}) {
          super(P), (this.type = se.ResponseHeader);
        }
        clone(P = {}) {
          return new L({
            headers: P.headers || this.headers,
            status: void 0 !== P.status ? P.status : this.status,
            statusText: P.statusText || this.statusText,
            url: P.url || this.url || void 0,
          });
        }
      }
      class Y extends U {
        constructor(P = {}) {
          super(P),
            (this.type = se.Response),
            (this.body = void 0 !== P.body ? P.body : null);
        }
        clone(P = {}) {
          return new Y({
            body: void 0 !== P.body ? P.body : this.body,
            headers: P.headers || this.headers,
            status: void 0 !== P.status ? P.status : this.status,
            statusText: P.statusText || this.statusText,
            url: P.url || this.url || void 0,
          });
        }
      }
      class z extends U {
        constructor(P) {
          super(P, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${P.url || "(unknown url)"}`
                : `Http failure response for ${P.url || "(unknown url)"}: ${
                    P.status
                  } ${P.statusText}`),
            (this.error = P.error || null);
        }
      }
      function be(me, P) {
        return {
          body: P,
          headers: me.headers,
          context: me.context,
          observe: me.observe,
          params: me.params,
          reportProgress: me.reportProgress,
          responseType: me.responseType,
          withCredentials: me.withCredentials,
        };
      }
      let fe = (() => {
        class me {
          constructor(F) {
            this.handler = F;
          }
          request(F, le, de = {}) {
            let Ue;
            if (F instanceof Q) Ue = F;
            else {
              let Ze, $t;
              (Ze = de.headers instanceof ye ? de.headers : new ye(de.headers)),
                de.params &&
                  ($t =
                    de.params instanceof Je
                      ? de.params
                      : new Je({ fromObject: de.params })),
                (Ue = new Q(F, le, void 0 !== de.body ? de.body : null, {
                  headers: Ze,
                  context: de.context,
                  params: $t,
                  reportProgress: de.reportProgress,
                  responseType: de.responseType || "json",
                  withCredentials: de.withCredentials,
                }));
            }
            const it = (0, I.of)(Ue).pipe(
              (0, G.b)((Ze) => this.handler.handle(Ze))
            );
            if (F instanceof Q || "events" === de.observe) return it;
            const Dt = it.pipe((0, he.h)((Ze) => Ze instanceof Y));
            switch (de.observe || "body") {
              case "body":
                switch (Ue.responseType) {
                  case "arraybuffer":
                    return Dt.pipe(
                      (0, H.U)((Ze) => {
                        if (
                          null !== Ze.body &&
                          !(Ze.body instanceof ArrayBuffer)
                        )
                          throw new Error("Response is not an ArrayBuffer.");
                        return Ze.body;
                      })
                    );
                  case "blob":
                    return Dt.pipe(
                      (0, H.U)((Ze) => {
                        if (null !== Ze.body && !(Ze.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return Ze.body;
                      })
                    );
                  case "text":
                    return Dt.pipe(
                      (0, H.U)((Ze) => {
                        if (null !== Ze.body && "string" != typeof Ze.body)
                          throw new Error("Response is not a string.");
                        return Ze.body;
                      })
                    );
                  default:
                    return Dt.pipe((0, H.U)((Ze) => Ze.body));
                }
              case "response":
                return Dt;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${de.observe}}`
                );
            }
          }
          delete(F, le = {}) {
            return this.request("DELETE", F, le);
          }
          get(F, le = {}) {
            return this.request("GET", F, le);
          }
          head(F, le = {}) {
            return this.request("HEAD", F, le);
          }
          jsonp(F, le) {
            return this.request("JSONP", F, {
              params: new Je().append(le, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(F, le = {}) {
            return this.request("OPTIONS", F, le);
          }
          patch(F, le, de = {}) {
            return this.request("PATCH", F, be(de, le));
          }
          post(F, le, de = {}) {
            return this.request("POST", F, be(de, le));
          }
          put(F, le, de = {}) {
            return this.request("PUT", F, be(de, le));
          }
        }
        return (
          (me.ɵfac = function (F) {
            return new (F || me)(l.LFG(ve));
          }),
          (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
          me
        );
      })();
      class $e {
        constructor(P, F) {
          (this.next = P), (this.interceptor = F);
        }
        handle(P) {
          return this.interceptor.intercept(P, this.next);
        }
      }
      const Xe = new l.OlP("HTTP_INTERCEPTORS");
      let Zt = (() => {
        class me {
          intercept(F, le) {
            return le.handle(F);
          }
        }
        return (
          (me.ɵfac = function (F) {
            return new (F || me)();
          }),
          (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
          me
        );
      })();
      const Ln = /^\)\]\}',?\n/;
      let Be = (() => {
        class me {
          constructor(F) {
            this.xhrFactory = F;
          }
          handle(F) {
            if ("JSONP" === F.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new $.y((le) => {
              const de = this.xhrFactory.build();
              if (
                (de.open(F.method, F.urlWithParams),
                F.withCredentials && (de.withCredentials = !0),
                F.headers.forEach((Vt, Tt) =>
                  de.setRequestHeader(Vt, Tt.join(","))
                ),
                F.headers.has("Accept") ||
                  de.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !F.headers.has("Content-Type"))
              ) {
                const Vt = F.detectContentTypeHeader();
                null !== Vt && de.setRequestHeader("Content-Type", Vt);
              }
              if (F.responseType) {
                const Vt = F.responseType.toLowerCase();
                de.responseType = "json" !== Vt ? Vt : "text";
              }
              const Ue = F.serializeBody();
              let it = null;
              const Dt = () => {
                  if (null !== it) return it;
                  const Vt = de.statusText || "OK",
                    Tt = new ye(de.getAllResponseHeaders()),
                    sn =
                      (function ne(me) {
                        return "responseURL" in me && me.responseURL
                          ? me.responseURL
                          : /^X-Request-URL:/m.test(me.getAllResponseHeaders())
                          ? me.getResponseHeader("X-Request-URL")
                          : null;
                      })(de) || F.url;
                  return (
                    (it = new L({
                      headers: Tt,
                      status: de.status,
                      statusText: Vt,
                      url: sn,
                    })),
                    it
                  );
                },
                Ze = () => {
                  let {
                      headers: Vt,
                      status: Tt,
                      statusText: sn,
                      url: lt,
                    } = Dt(),
                    Ft = null;
                  204 !== Tt &&
                    (Ft =
                      typeof de.response > "u" ? de.responseText : de.response),
                    0 === Tt && (Tt = Ft ? 200 : 0);
                  let tt = Tt >= 200 && Tt < 300;
                  if ("json" === F.responseType && "string" == typeof Ft) {
                    const hn = Ft;
                    Ft = Ft.replace(Ln, "");
                    try {
                      Ft = "" !== Ft ? JSON.parse(Ft) : null;
                    } catch (mn) {
                      (Ft = hn),
                        tt && ((tt = !1), (Ft = { error: mn, text: Ft }));
                    }
                  }
                  tt
                    ? (le.next(
                        new Y({
                          body: Ft,
                          headers: Vt,
                          status: Tt,
                          statusText: sn,
                          url: lt || void 0,
                        })
                      ),
                      le.complete())
                    : le.error(
                        new z({
                          error: Ft,
                          headers: Vt,
                          status: Tt,
                          statusText: sn,
                          url: lt || void 0,
                        })
                      );
                },
                $t = (Vt) => {
                  const { url: Tt } = Dt(),
                    sn = new z({
                      error: Vt,
                      status: de.status || 0,
                      statusText: de.statusText || "Unknown Error",
                      url: Tt || void 0,
                    });
                  le.error(sn);
                };
              let At = !1;
              const nn = (Vt) => {
                  At || (le.next(Dt()), (At = !0));
                  let Tt = { type: se.DownloadProgress, loaded: Vt.loaded };
                  Vt.lengthComputable && (Tt.total = Vt.total),
                    "text" === F.responseType &&
                      !!de.responseText &&
                      (Tt.partialText = de.responseText),
                    le.next(Tt);
                },
                ze = (Vt) => {
                  let Tt = { type: se.UploadProgress, loaded: Vt.loaded };
                  Vt.lengthComputable && (Tt.total = Vt.total), le.next(Tt);
                };
              return (
                de.addEventListener("load", Ze),
                de.addEventListener("error", $t),
                de.addEventListener("timeout", $t),
                de.addEventListener("abort", $t),
                F.reportProgress &&
                  (de.addEventListener("progress", nn),
                  null !== Ue &&
                    de.upload &&
                    de.upload.addEventListener("progress", ze)),
                de.send(Ue),
                le.next({ type: se.Sent }),
                () => {
                  de.removeEventListener("error", $t),
                    de.removeEventListener("abort", $t),
                    de.removeEventListener("load", Ze),
                    de.removeEventListener("timeout", $t),
                    F.reportProgress &&
                      (de.removeEventListener("progress", nn),
                      null !== Ue &&
                        de.upload &&
                        de.upload.removeEventListener("progress", ze)),
                    de.readyState !== de.DONE && de.abort();
                }
              );
            });
          }
        }
        return (
          (me.ɵfac = function (F) {
            return new (F || me)(l.LFG(d.JF));
          }),
          (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
          me
        );
      })();
      const W = new l.OlP("XSRF_COOKIE_NAME"),
        Fe = new l.OlP("XSRF_HEADER_NAME");
      class B {}
      let Se = (() => {
          class me {
            constructor(F, le, de) {
              (this.doc = F),
                (this.platform = le),
                (this.cookieName = de),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const F = this.doc.cookie || "";
              return (
                F !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, d.Mx)(F, this.cookieName)),
                  (this.lastCookieString = F)),
                this.lastToken
              );
            }
          }
          return (
            (me.ɵfac = function (F) {
              return new (F || me)(l.LFG(d.K0), l.LFG(l.Lbi), l.LFG(W));
            }),
            (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
            me
          );
        })(),
        oe = (() => {
          class me {
            constructor(F, le) {
              (this.tokenService = F), (this.headerName = le);
            }
            intercept(F, le) {
              const de = F.url.toLowerCase();
              if (
                "GET" === F.method ||
                "HEAD" === F.method ||
                de.startsWith("http://") ||
                de.startsWith("https://")
              )
                return le.handle(F);
              const Ue = this.tokenService.getToken();
              return (
                null !== Ue &&
                  !F.headers.has(this.headerName) &&
                  (F = F.clone({
                    headers: F.headers.set(this.headerName, Ue),
                  })),
                le.handle(F)
              );
            }
          }
          return (
            (me.ɵfac = function (F) {
              return new (F || me)(l.LFG(B), l.LFG(Fe));
            }),
            (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
            me
          );
        })(),
        ue = (() => {
          class me {
            constructor(F, le) {
              (this.backend = F), (this.injector = le), (this.chain = null);
            }
            handle(F) {
              if (null === this.chain) {
                const le = this.injector.get(Xe, []);
                this.chain = le.reduceRight(
                  (de, Ue) => new $e(de, Ue),
                  this.backend
                );
              }
              return this.chain.handle(F);
            }
          }
          return (
            (me.ɵfac = function (F) {
              return new (F || me)(l.LFG(X), l.LFG(l.zs3));
            }),
            (me.ɵprov = l.Yz7({ token: me, factory: me.ɵfac })),
            me
          );
        })(),
        Yt = (() => {
          class me {
            static disable() {
              return {
                ngModule: me,
                providers: [{ provide: oe, useClass: Zt }],
              };
            }
            static withOptions(F = {}) {
              return {
                ngModule: me,
                providers: [
                  F.cookieName ? { provide: W, useValue: F.cookieName } : [],
                  F.headerName ? { provide: Fe, useValue: F.headerName } : [],
                ],
              };
            }
          }
          return (
            (me.ɵfac = function (F) {
              return new (F || me)();
            }),
            (me.ɵmod = l.oAB({ type: me })),
            (me.ɵinj = l.cJS({
              providers: [
                oe,
                { provide: Xe, useExisting: oe, multi: !0 },
                { provide: B, useClass: Se },
                { provide: W, useValue: "XSRF-TOKEN" },
                { provide: Fe, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            me
          );
        })(),
        It = (() => {
          class me {}
          return (
            (me.ɵfac = function (F) {
              return new (F || me)();
            }),
            (me.ɵmod = l.oAB({ type: me })),
            (me.ɵinj = l.cJS({
              providers: [
                fe,
                { provide: ve, useClass: ue },
                Be,
                { provide: X, useExisting: Be },
              ],
              imports: [
                Yt.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN",
                }),
              ],
            })),
            me
          );
        })();
    },
    8256: (je, ce, S) => {
      S.d(ce, {
        tb: () => Rg,
        AFp: () => Pg,
        ip1: () => Og,
        CZH: () => tl,
        hGG: () => yE,
        z2F: () => rl,
        sBO: () => nE,
        Sil: () => Lb,
        _Vd: () => Bs,
        EJc: () => Rb,
        Xts: () => Ll,
        SBq: () => Us,
        lqb: () => Di,
        qLn: () => js,
        vpe: () => no,
        XFs: () => P,
        OlP: () => Rt,
        zs3: () => bi,
        ZZ4: () => Oc,
        aQg: () => Pc,
        soG: () => nl,
        YKP: () => kp,
        h0i: () => ms,
        PXZ: () => Kb,
        R0b: () => yr,
        FiY: () => Ps,
        Lbi: () => Pb,
        g9A: () => Ng,
        Qsj: () => gv,
        FYo: () => Sd,
        JOm: () => qr,
        tp0: () => Fs,
        Rgc: () => ra,
        dDg: () => Wb,
        eoX: () => Hg,
        GfV: () => Ad,
        s_b: () => Qa,
        ifc: () => nn,
        MMx: () => sc,
        Lck: () => IC,
        eFA: () => zg,
        G48: () => tE,
        Gpc: () => vt,
        f3M: () => Jc,
        _c5: () => vE,
        c2e: () => Fb,
        zSh: () => Ul,
        wAp: () => rt,
        vHH: () => q,
        lri: () => Ug,
        rWj: () => jg,
        D6c: () => _E,
        cg1: () => Qu,
        kL8: () => ap,
        dqk: () => ze,
        Z0I: () => oe,
        sIi: () => Zs,
        CqO: () => hh,
        QGY: () => Wu,
        QP$: () => Ke,
        F4k: () => fh,
        RDi: () => Im,
        AaK: () => Re,
        qOj: () => Lu,
        TTD: () => Mr,
        _Bn: () => Rp,
        jDz: () => Vp,
        xp6: () => cf,
        uIk: () => Uu,
        ekj: () => Ju,
        Suo: () => lg,
        Xpm: () => Wn,
        lG2: () => J,
        Yz7: () => W,
        cJS: () => B,
        oAB: () => Vn,
        Yjl: () => V,
        Y36: () => ts,
        _UZ: () => $u,
        qZA: () => $a,
        TgZ: () => Ha,
        EpF: () => dh,
        n5z: () => Gi,
        LFG: () => pn,
        $8M: () => Is,
        $Z: () => Ef,
        NdJ: () => Zu,
        CRH: () => ug,
        oxw: () => yh,
        ALo: () => Qp,
        lcZ: () => Xp,
        xi3: () => eg,
        Dn7: () => tg,
        Q6J: () => ju,
        s9C: () => Yu,
        MGl: () => Ga,
        DdM: () => zp,
        VKq: () => Wp,
        iGM: () => ag,
        KtG: () => ai,
        CHM: () => pr,
        LSH: () => kl,
        YNc: () => uh,
        _uU: () => jh,
        Oqu: () => qu,
        hij: () => Wa,
      });
      var d = S(7579),
        l = S(727),
        I = S(9751),
        $ = S(8189),
        G = S(8421),
        he = S(515),
        H = S(7669),
        ve = S(2076),
        ye = S(2961),
        ie = S(4482);
      function Ie(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new ye.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function ae(e) {
        for (let t in e) if (e[t] === ae) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Te(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Re(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Re).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function We(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const Je = ae({ __forward_ref__: ae });
      function vt(e) {
        return (
          (e.__forward_ref__ = vt),
          (e.toString = function () {
            return Re(this());
          }),
          e
        );
      }
      function Pe(e) {
        return Oe(e) ? e() : e;
      }
      function Oe(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(Je) &&
          e.__forward_ref__ === vt
        );
      }
      class q extends Error {
        constructor(t, n) {
          super(
            (function He(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function j(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Y(e, t) {
        throw new q(-201, !1);
      }
      function ft(e, t) {
        null == e &&
          (function ot(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function W(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function B(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Se(e) {
        return ue(e, It) || ue(e, tn);
      }
      function oe(e) {
        return null !== Se(e);
      }
      function ue(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Yt(e) {
        return e && (e.hasOwnProperty(kr) || e.hasOwnProperty(me))
          ? e[kr]
          : null;
      }
      const It = ae({ ɵprov: ae }),
        kr = ae({ ɵinj: ae }),
        tn = ae({ ngInjectableDef: ae }),
        me = ae({ ngInjectorDef: ae });
      var P = (() => (
        ((P = P || {})[(P.Default = 0)] = "Default"),
        (P[(P.Host = 1)] = "Host"),
        (P[(P.Self = 2)] = "Self"),
        (P[(P.SkipSelf = 4)] = "SkipSelf"),
        (P[(P.Optional = 8)] = "Optional"),
        P
      ))();
      let F;
      function de(e) {
        const t = F;
        return (F = e), t;
      }
      function Ue(e, t, n) {
        const r = Se(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & P.Optional
          ? null
          : void 0 !== t
          ? t
          : void Y(Re(e));
      }
      function Dt(e) {
        return { toString: e }.toString();
      }
      var Ze = (() => (
          ((Ze = Ze || {})[(Ze.OnPush = 0)] = "OnPush"),
          (Ze[(Ze.Default = 1)] = "Default"),
          Ze
        ))(),
        nn = (() => {
          return (
            ((e = nn || (nn = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            nn
          );
          var e;
        })();
      const ze = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        sn = {},
        lt = [],
        Ft = ae({ ɵcmp: ae }),
        tt = ae({ ɵdir: ae }),
        hn = ae({ ɵpipe: ae }),
        mn = ae({ ɵmod: ae }),
        jt = ae({ ɵfac: ae }),
        bn = ae({ __NG_ELEMENT_ID__: ae });
      let zn = 0;
      function Wn(e) {
        return Dt(() => {
          const n = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Ze.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || lt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || nn.Emulated,
              id: "c" + zn++,
              styles: e.styles || lt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            a = e.features;
          return (
            (o.inputs = _r(e.inputs, r)),
            (o.outputs = _r(e.outputs)),
            a && a.forEach((f) => f(o)),
            (o.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Zn).filter(Yn)
              : null),
            (o.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(pe).filter(Yn)
              : null),
            o
          );
        });
      }
      function Zn(e) {
        return O(e) || K(e);
      }
      function Yn(e) {
        return null !== e;
      }
      function Vn(e) {
        return Dt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || lt,
          declarations: e.declarations || lt,
          imports: e.imports || lt,
          exports: e.exports || lt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function _r(e, t) {
        if (null == e) return sn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      const J = Wn;
      function V(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function O(e) {
        return e[Ft] || null;
      }
      function K(e) {
        return e[tt] || null;
      }
      function pe(e) {
        return e[hn] || null;
      }
      function Ke(e) {
        const t = O(e) || K(e) || pe(e);
        return null !== t && t.standalone;
      }
      function Qe(e, t) {
        const n = e[mn] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Re(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function un(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Qt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function io(e) {
        return 0 != (8 & e.flags);
      }
      function zt(e) {
        return 2 == (2 & e.flags);
      }
      function Xn(e) {
        return 1 == (1 & e.flags);
      }
      function _n(e) {
        return null !== e.template;
      }
      function Mo(e) {
        return 0 != (256 & e[2]);
      }
      function Un(e, t) {
        return e.hasOwnProperty(jt) ? e[jt] : null;
      }
      class wr {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Mr() {
        return Br;
      }
      function Br(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = uo), Ur;
      }
      function Ur() {
        const e = To(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === sn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function uo(e, t, n, r) {
        const o =
            To(e) ||
            (function jr(e, t) {
              return (e[co] = t);
            })(e, { previous: sn, current: null }),
          i = o.current || (o.current = {}),
          a = o.previous,
          f = this.declaredInputs[n],
          p = a[f];
        (i[f] = new wr(p && p.currentValue, t, a === sn)), (e[r] = t);
      }
      Mr.ngInherit = !0;
      const co = "__ngSimpleChanges__";
      function To(e) {
        return e[co] || null;
      }
      function ct(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function po(e, t) {
        return ct(t[e]);
      }
      function dn(e, t) {
        return ct(t[e.index]);
      }
      function zr(e, t) {
        return e.data[t];
      }
      function Sr(e, t) {
        return e[t];
      }
      function Sn(e, t) {
        const n = t[e];
        return un(n) ? n : n[0];
      }
      function go(e) {
        return 64 == (64 & e[2]);
      }
      function tr(e, t) {
        return null == t ? null : e[t];
      }
      function hr(e) {
        e[18] = 0;
      }
      function Oo(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const nt = { lFrame: _e(null), bindingsEnabled: !0 };
      function Fo() {
        return nt.bindingsEnabled;
      }
      function De() {
        return nt.lFrame.lView;
      }
      function ht() {
        return nt.lFrame.tView;
      }
      function pr(e) {
        return (nt.lFrame.contextLView = e), e[8];
      }
      function ai(e) {
        return (nt.lFrame.contextLView = null), e;
      }
      function D() {
        let e = _();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function _() {
        return nt.lFrame.currentTNode;
      }
      function A(e, t) {
        const n = nt.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function re() {
        return nt.lFrame.isParent;
      }
      function on() {
        const e = nt.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function nr() {
        return nt.lFrame.bindingIndex++;
      }
      function ia(e, t) {
        const n = nt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Ri(t);
      }
      function Ri(e) {
        nt.lFrame.currentDirectiveIndex = e;
      }
      function g() {
        return nt.lFrame.currentQueryIndex;
      }
      function b(e) {
        nt.lFrame.currentQueryIndex = e;
      }
      function v(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function M(e, t, n) {
        if (n & P.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & P.Host ||
              ((o = v(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (nt.lFrame = te());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function R(e) {
        const t = te(),
          n = e[1];
        (nt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function te() {
        const e = nt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? _e(e) : t;
      }
      function _e(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Le() {
        const e = nt.lFrame;
        return (
          (nt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const St = Le;
      function wt() {
        const e = Le();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function mt() {
        return nt.lFrame.selectedIndex;
      }
      function Ct(e) {
        nt.lFrame.selectedIndex = e;
      }
      function pt() {
        const e = nt.lFrame;
        return zr(e.tView, e.selectedIndex);
      }
      function vo(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: f,
              ngAfterViewInit: p,
              ngAfterViewChecked: C,
              ngOnDestroy: w,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            f &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, f)),
            p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
            C &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, C),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, C)),
            null != w && (e.destroyHooks || (e.destroyHooks = [])).push(n, w);
        }
      }
      function Li(e, t, n) {
        ui(e, t, 3, n);
      }
      function Vi(e, t, n, r) {
        (3 & e[2]) === n && ui(e, t, n, r);
      }
      function Cs(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function ui(e, t, n, r) {
        const i = r ?? -1,
          a = t.length - 1;
        let f = 0;
        for (let p = void 0 !== r ? 65535 & e[18] : 0; p < a; p++)
          if ("number" == typeof t[p + 1]) {
            if (((f = t[p]), null != r && f >= r)) break;
          } else
            t[p] < 0 && (e[18] += 65536),
              (f < i || -1 == i) &&
                (al(e, n, t, p), (e[18] = (4294901760 & e[18]) + p + 2)),
              p++;
      }
      function al(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          f = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(f);
            } finally {
            }
          }
        } else
          try {
            i.call(f);
          } finally {
          }
      }
      class ci {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function fi(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ("number" == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              a = n[r++],
              f = n[r++];
            e.setAttribute(t, a, f, i);
          } else {
            const i = o,
              a = n[++r];
            ws(i) ? e.setProperty(t, i, a) : e.setAttribute(t, i, a), r++;
          }
        }
        return r;
      }
      function Es(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function ws(e) {
        return 64 === e.charCodeAt(0);
      }
      function Bi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  la(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function la(e, t, n, r, o) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const f = e[i++];
            if ("number" == typeof f) {
              if (f === t) {
                a = -1;
                break;
              }
              if (f > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const f = e[i];
          if ("number" == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function ua(e) {
        return -1 !== e;
      }
      function Ro(e) {
        return 32767 & e;
      }
      function ko(e, t) {
        let n = (function hl(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Ui = !0;
      function Lo(e) {
        const t = Ui;
        return (Ui = e), t;
      }
      let ml = 0;
      const mr = {};
      function hi(e, t) {
        const n = ji(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Vo(r.data, e),
          Vo(t, null),
          Vo(r.blueprint, null));
        const o = Bo(e, t),
          i = e.injectorIndex;
        if (ua(o)) {
          const a = Ro(o),
            f = ko(o, t),
            p = f[1].data;
          for (let C = 0; C < 8; C++) t[i + C] = f[a + C] | p[a + C];
        }
        return (t[i + 8] = o), i;
      }
      function Vo(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function ji(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Bo(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = As(o)), null === r)) return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Uo(e, t, n) {
        !(function vl(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(bn) && (r = n[bn]),
            null == r && (r = n[bn] = ml++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function ca(e, t, n) {
        if (n & P.Optional || void 0 !== e) return e;
        Y();
      }
      function pi(e, t, n, r) {
        if (
          (n & P.Optional && void 0 === r && (r = null),
          0 == (n & (P.Self | P.Host)))
        ) {
          const o = e[9],
            i = de(void 0);
          try {
            return o ? o.get(t, r, n & P.Optional) : Ue(t, r, n & P.Optional);
          } finally {
            de(i);
          }
        }
        return ca(r, 0, n);
      }
      function da(e, t, n, r = P.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const a = (function Dl(e, t, n, r, o) {
              let i = e,
                a = t;
              for (
                ;
                null !== i && null !== a && 1024 & a[2] && !(256 & a[2]);

              ) {
                const f = fa(i, a, n, r | P.Self, mr);
                if (f !== mr) return f;
                let p = i.parent;
                if (!p) {
                  const C = a[21];
                  if (C) {
                    const w = C.get(n, mr, r);
                    if (w !== mr) return w;
                  }
                  (p = As(a)), (a = a[15]);
                }
                i = p;
              }
              return o;
            })(e, t, n, r, mr);
            if (a !== mr) return a;
          }
          const i = fa(e, t, n, r, mr);
          if (i !== mr) return i;
        }
        return pi(t, n, r, o);
      }
      function fa(e, t, n, r, o) {
        const i = (function ha(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(bn) ? e[bn] : void 0;
          return "number" == typeof t ? (t >= 0 ? 255 & t : $i) : t;
        })(n);
        if ("function" == typeof i) {
          if (!M(t, e, r)) return r & P.Host ? ca(o, 0, r) : pi(t, n, r, o);
          try {
            const a = i(r);
            if (null != a || r & P.Optional) return a;
            Y();
          } finally {
            St();
          }
        } else if ("number" == typeof i) {
          let a = null,
            f = ji(e, t),
            p = -1,
            C = r & P.Host ? t[16][6] : null;
          for (
            (-1 === f || r & P.SkipSelf) &&
            ((p = -1 === f ? Bo(e, t) : t[f + 8]),
            -1 !== p && pa(r, !1)
              ? ((a = t[1]), (f = Ro(p)), (t = ko(p, t)))
              : (f = -1));
            -1 !== f;

          ) {
            const w = t[1];
            if (fn(i, f, w.data)) {
              const T = _l(f, t, n, a, r, C);
              if (T !== mr) return T;
            }
            (p = t[f + 8]),
              -1 !== p && pa(r, t[1].data[f + 8] === C) && fn(i, f, t)
                ? ((a = w), (f = Ro(p)), (t = ko(p, t)))
                : (f = -1);
          }
        }
        return o;
      }
      function _l(e, t, n, r, o, i) {
        const a = t[1],
          f = a.data[e + 8],
          w = Hi(
            f,
            a,
            n,
            null == r ? zt(f) && Ui : r != a && 0 != (3 & f.type),
            o & P.Host && i === f
          );
        return null !== w ? gi(t, a, w, f) : mr;
      }
      function Hi(e, t, n, r, o) {
        const i = e.providerIndexes,
          a = t.data,
          f = 1048575 & i,
          p = e.directiveStart,
          w = i >> 20,
          k = o ? f + w : e.directiveEnd;
        for (let Z = r ? f : f + w; Z < k; Z++) {
          const ge = a[Z];
          if ((Z < p && n === ge) || (Z >= p && ge.type === n)) return Z;
        }
        if (o) {
          const Z = a[p];
          if (Z && _n(Z) && Z.type === n) return p;
        }
        return null;
      }
      function gi(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function ll(e) {
            return e instanceof ci;
          })(o)
        ) {
          const a = o;
          a.resolving &&
            (function se(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new q(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function Q(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : j(e);
              })(i[n])
            );
          const f = Lo(a.canSeeViewProviders);
          a.resolving = !0;
          const p = a.injectImpl ? de(a.injectImpl) : null;
          M(e, r, P.Default);
          try {
            (o = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function li(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const a = Br(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== p && de(p), Lo(f), (a.resolving = !1), St();
          }
        }
        return o;
      }
      function fn(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function pa(e, t) {
        return !(e & P.Self || (e & P.Host && t));
      }
      class yo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return da(this._tNode, this._lView, t, r, n);
        }
      }
      function $i() {
        return new yo(D(), De());
      }
      function Gi(e) {
        return Dt(() => {
          const t = e.prototype.constructor,
            n = t[jt] || Ss(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[jt] || Ss(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function Ss(e) {
        return Oe(e)
          ? () => {
              const t = Ss(Pe(e));
              return t && t();
            }
          : Un(e);
      }
      function As(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function Is(e) {
        return (function yl(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (Es(i)) break;
              if (0 === i) o += 2;
              else if ("number" == typeof i)
                for (o++; o < r && "string" == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(D(), e);
      }
      const jo = "__parameters__";
      function vi(e, t, n) {
        return Dt(() => {
          const r = (function Ho(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const a = new o(...i);
            return (f.annotation = a), f;
            function f(p, C, w) {
              const T = p.hasOwnProperty(jo)
                ? p[jo]
                : Object.defineProperty(p, jo, { value: [] })[jo];
              for (; T.length <= w; ) T.push(null);
              return (T[w] = T[w] || []).push(a), p;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class Rt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = W({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Hn(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), Hn(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function xr(e, t) {
        e.forEach((n) => (Array.isArray(n) ? xr(n, t) : t(n)));
      }
      function va(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function zi(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function s(e, t, n) {
        let r = y(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Ml(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function h(e, t) {
        const n = y(e, t);
        if (n >= 0) return e[1 | n];
      }
      function y(e, t) {
        return (function x(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Tn = {},
        Wi = "__NG_DI_FLAG__",
        Kr = "ngTempTokenPath",
        hm = /\n/gm,
        Zc = "__source";
      let xs;
      function Zi(e) {
        const t = xs;
        return (xs = e), t;
      }
      function gm(e, t = P.Default) {
        if (void 0 === xs) throw new q(-203, !1);
        return null === xs
          ? Ue(e, void 0, t)
          : xs.get(e, t & P.Optional ? null : void 0, t);
      }
      function pn(e, t = P.Default) {
        return (
          (function le() {
            return F;
          })() || gm
        )(Pe(e), t);
      }
      function Jc(e, t = P.Default) {
        return (
          "number" != typeof t &&
            (t =
              0 |
              (t.optional && 8) |
              (t.host && 1) |
              (t.self && 2) |
              (t.skipSelf && 4)),
          pn(e, t)
        );
      }
      function Al(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = Pe(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new q(900, !1);
            let o,
              i = P.Default;
            for (let a = 0; a < r.length; a++) {
              const f = r[a],
                p = mm(f);
              "number" == typeof p
                ? -1 === p
                  ? (o = f.token)
                  : (i |= p)
                : (o = f);
            }
            t.push(pn(o, i));
          } else t.push(pn(r));
        }
        return t;
      }
      function Os(e, t) {
        return (e[Wi] = t), (e.prototype[Wi] = t), e;
      }
      function mm(e) {
        return e[Wi];
      }
      const Ps = Os(vi("Optional"), 8),
        Fs = Os(vi("SkipSelf"), 4);
      let Tl;
      function Im(e) {
        Tl = e;
      }
      class ad {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function Zo(e) {
        return e instanceof ad ? e.changingThisBreaksApplicationSecurity : e;
      }
      const Um =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var gn = (() => (
        ((gn = gn || {})[(gn.NONE = 0)] = "NONE"),
        (gn[(gn.HTML = 1)] = "HTML"),
        (gn[(gn.STYLE = 2)] = "STYLE"),
        (gn[(gn.SCRIPT = 3)] = "SCRIPT"),
        (gn[(gn.URL = 4)] = "URL"),
        (gn[(gn.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        gn
      ))();
      function kl(e) {
        const t = (function Vs() {
          const e = De();
          return e && e[12];
        })();
        return t
          ? t.sanitize(gn.URL, e) || ""
          : (function ks(e, t) {
              const n = (function km(e) {
                return (e instanceof ad && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, "URL")
          ? Zo(e)
          : (function Pl(e) {
              return (e = String(e)).match(Um) ? e : "unsafe:" + e;
            })(j(e));
      }
      const Ll = new Rt("ENVIRONMENT_INITIALIZER"),
        gd = new Rt("INJECTOR", -1),
        md = new Rt("INJECTOR_DEF_TYPES");
      class vd {
        get(t, n = Tn) {
          if (n === Tn) {
            const r = new Error(`NullInjectorError: No provider for ${Re(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function ev(...e) {
        return { ɵproviders: yd(0, e) };
      }
      function yd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          xr(t, (i) => {
            const a = i;
            Vl(a, n, [], r) && (o || (o = []), o.push(a));
          }),
          void 0 !== o && _d(o, n),
          n
        );
      }
      function _d(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          xr(o, (i) => {
            t.push(i);
          });
        }
      }
      function Vl(e, t, n, r) {
        if (!(e = Pe(e))) return !1;
        let o = null,
          i = Yt(e);
        const a = !i && O(e);
        if (i || a) {
          if (a && !a.standalone) return !1;
          o = e;
        } else {
          const p = e.ngModule;
          if (((i = Yt(p)), !i)) return !1;
          o = p;
        }
        const f = r.has(o);
        if (a) {
          if (f) return !1;
          if ((r.add(o), a.dependencies)) {
            const p =
              "function" == typeof a.dependencies
                ? a.dependencies()
                : a.dependencies;
            for (const C of p) Vl(C, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !f) {
              let C;
              r.add(o);
              try {
                xr(i.imports, (w) => {
                  Vl(w, t, n, r) && (C || (C = []), C.push(w));
                });
              } finally {
              }
              void 0 !== C && _d(C, t);
            }
            if (!f) {
              const C = Un(o) || (() => new o());
              t.push(
                { provide: o, useFactory: C, deps: lt },
                { provide: md, useValue: o, multi: !0 },
                { provide: Ll, useValue: () => pn(o), multi: !0 }
              );
            }
            const p = i.providers;
            null == p ||
              f ||
              xr(p, (w) => {
                t.push(w);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      const tv = ae({ provide: String, useValue: ae });
      function Bl(e) {
        return null !== e && "object" == typeof e && tv in e;
      }
      function _i(e) {
        return "function" == typeof e;
      }
      const Ul = new Rt("Set Injector scope."),
        Ma = {},
        rv = {};
      let jl;
      function Sa() {
        return void 0 === jl && (jl = new vd()), jl;
      }
      class Di {}
      class bd extends Di {
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            $l(t, (a) => this.processProvider(a)),
            this.records.set(gd, Ki(void 0, this)),
            o.has("environment") && this.records.set(Di, Ki(void 0, this));
          const i = this.records.get(Ul);
          null != i && "string" == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(md.multi, lt, P.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = Zi(this),
            r = de(void 0);
          try {
            return t();
          } finally {
            Zi(n), de(r);
          }
        }
        get(t, n = Tn, r = P.Default) {
          this.assertNotDestroyed();
          const o = Zi(this),
            i = de(void 0);
          try {
            if (!(r & P.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const p =
                  (function lv(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof Rt)
                    );
                  })(t) && Se(t);
                (f = p && this.injectableDefInScope(p) ? Ki(Hl(t), Ma) : null),
                  this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & P.Self ? Sa() : this.parent).get(
              t,
              (n = r & P.Optional && n === Tn ? null : n)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[Kr] = a[Kr] || []).unshift(Re(t)), o)) throw a;
              return (function vm(e, t, n, r) {
                const o = e[Kr];
                throw (
                  (t[Zc] && o.unshift(t[Zc]),
                  (e.message = (function ym(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = Re(t);
                    if (Array.isArray(t)) o = t.map(Re).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let f = t[a];
                          i.push(
                            a +
                              ":" +
                              ("string" == typeof f ? JSON.stringify(f) : Re(f))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      hm,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[Kr] = null),
                  e)
                );
              })(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            de(i), Zi(o);
          }
        }
        resolveInjectorInitializers() {
          const t = Zi(this),
            n = de(void 0);
          try {
            const r = this.get(Ll.multi, lt, P.Self);
            for (const o of r) o();
          } finally {
            Zi(t), de(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Re(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new q(205, !1);
        }
        processProvider(t) {
          let n = _i((t = Pe(t))) ? t : Pe(t && t.provide);
          const r = (function iv(e) {
            return Bl(e) ? Ki(void 0, e.useValue) : Ki(Ed(e), Ma);
          })(t);
          if (_i(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = Ki(void 0, Ma, !0)),
              (o.factory = () => Al(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Ma && ((n.value = rv), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function av(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = Pe(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Hl(e) {
        const t = Se(e),
          n = null !== t ? t.factory : Un(e);
        if (null !== n) return n;
        if (e instanceof Rt) throw new q(204, !1);
        if (e instanceof Function)
          return (function ov(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function yi(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new q(204, !1))
              );
            const n = (function Et(e) {
              const t = e && (e[It] || e[tn]);
              if (t) {
                const n = (function Ht(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new q(204, !1);
      }
      function Ed(e, t, n) {
        let r;
        if (_i(e)) {
          const o = Pe(e);
          return Un(o) || Hl(o);
        }
        if (Bl(e)) r = () => Pe(e.useValue);
        else if (
          (function Cd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Al(e.deps || []));
        else if (
          (function Dd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => pn(Pe(e.useExisting));
        else {
          const o = Pe(e && (e.useClass || e.provide));
          if (
            !(function sv(e) {
              return !!e.deps;
            })(e)
          )
            return Un(o) || Hl(o);
          r = () => new o(...Al(e.deps));
        }
        return r;
      }
      function Ki(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function uv(e) {
        return !!e.ɵproviders;
      }
      function $l(e, t) {
        for (const n of e)
          Array.isArray(n) ? $l(n, t) : uv(n) ? $l(n.ɵproviders, t) : t(n);
      }
      class wd {}
      class fv {
        resolveComponentFactory(t) {
          throw (function dv(e) {
            const t = Error(
              `No component factory found for ${Re(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Bs = (() => {
        class e {}
        return (e.NULL = new fv()), e;
      })();
      function hv() {
        return qi(D(), De());
      }
      function qi(e, t) {
        return new Us(dn(e, t));
      }
      let Us = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = hv), e;
      })();
      function pv(e) {
        return e instanceof Us ? e.nativeElement : e;
      }
      class Sd {}
      let gv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function mv() {
                const e = De(),
                  n = Sn(D().index, e);
                return (un(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        vv = (() => {
          class e {}
          return (
            (e.ɵprov = W({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class Ad {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const yv = new Ad("14.2.10"),
        Gl = {};
      function Jl(e) {
        return e.ngOriginalError;
      }
      class js {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Jl(t);
          for (; n && Jl(n); ) n = Jl(n);
          return n || null;
        }
      }
      const Kl = new Map();
      let xv = 0;
      const Ql = "__ngContext__";
      function Rn(e, t) {
        un(t)
          ? ((e[Ql] = t[20]),
            (function Pv(e) {
              Kl.set(e[20], e);
            })(t))
          : (e[Ql] = t);
      }
      function Do(e) {
        return e instanceof Function ? e() : e;
      }
      var qr = (() => (
        ((qr = qr || {})[(qr.Important = 1)] = "Important"),
        (qr[(qr.DashCase = 2)] = "DashCase"),
        qr
      ))();
      function eu(e, t) {
        return undefined(e, t);
      }
      function $s(e) {
        const t = e[3];
        return Qt(t) ? t[3] : t;
      }
      function tu(e) {
        return jd(e[13]);
      }
      function nu(e) {
        return jd(e[4]);
      }
      function jd(e) {
        for (; null !== e && !Qt(e); ) e = e[4];
        return e;
      }
      function Xi(e, t, n, r, o) {
        if (null != r) {
          let i,
            a = !1;
          Qt(r) ? (i = r) : un(r) && ((a = !0), (r = r[0]));
          const f = ct(r);
          0 === e && null !== n
            ? null == o
              ? Zd(t, n, f)
              : Ci(t, n, f, o || null, !0)
            : 1 === e && null !== n
            ? Ci(t, n, f, o || null, !0)
            : 2 === e
            ? (function ef(e, t, n) {
                const r = Aa(e, t);
                r &&
                  (function iy(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, f, a)
            : 3 === e && t.destroyNode(f),
            null != i &&
              (function ly(e, t, n, r, o) {
                const i = n[7];
                i !== ct(n) && Xi(t, e, r, i, o);
                for (let f = 10; f < n.length; f++) {
                  const p = n[f];
                  Gs(p[1], p, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function ou(e, t, n) {
        return e.createElement(t, n);
      }
      function $d(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), Oo(o, -1)), n.splice(r, 1);
      }
      function iu(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && $d(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = zi(e, 10 + t);
          !(function qv(e, t) {
            Gs(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const a = i[19];
          null !== a && a.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function Gd(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Gs(e, t, n, 3, null, null),
            (function ey(e) {
              let t = e[13];
              if (!t) return su(e[1], e);
              for (; t; ) {
                let n = null;
                if (un(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    un(t) && su(t[1], t), (t = t[3]);
                  null === t && (t = e), un(t) && su(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function su(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function oy(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof ci)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const f = o[i[a]],
                          p = i[a + 1];
                        try {
                          p.call(f);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function ry(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const a = n[i + 1],
                      f = "function" == typeof a ? a(t) : ct(t[a]),
                      p = r[(o = n[i + 2])],
                      C = n[i + 3];
                    "boolean" == typeof C
                      ? f.removeEventListener(n[i], p, C)
                      : C >= 0
                      ? r[(o = C)]()
                      : r[(o = -C)].unsubscribe(),
                      (i += 2);
                  } else {
                    const a = r[(o = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && Qt(t[3])) {
            n !== t[3] && $d(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function Fv(e) {
            Kl.delete(e[20]);
          })(t);
        }
      }
      function zd(e, t, n) {
        return (function Wd(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const o = e.data[r.directiveStart].encapsulation;
            if (o === nn.None || o === nn.Emulated) return null;
          }
          return dn(r, n);
        })(e, t.parent, n);
      }
      function Ci(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function Zd(e, t, n) {
        e.appendChild(t, n);
      }
      function Yd(e, t, n, r, o) {
        null !== r ? Ci(e, t, n, r, o) : Zd(e, t, n);
      }
      function Aa(e, t) {
        return e.parentNode(t);
      }
      let qd = function Kd(e, t, n) {
        return 40 & e.type ? dn(e, n) : null;
      };
      function Ia(e, t, n, r) {
        const o = zd(e, r, t),
          i = t[11],
          f = (function Jd(e, t, n) {
            return qd(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let p = 0; p < n.length; p++) Yd(i, o, n[p], f, !1);
          else Yd(i, o, n, f, !1);
      }
      function Ta(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return dn(t, e);
          if (4 & n) return lu(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Ta(e, r);
            {
              const o = e[t.index];
              return Qt(o) ? lu(-1, o) : ct(o);
            }
          }
          if (32 & n) return eu(t, e)() || ct(e[t.index]);
          {
            const r = Xd(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Ta($s(e[16]), r)
              : Ta(e, t.next);
          }
        }
        return null;
      }
      function Xd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function lu(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return Ta(r, o);
        }
        return t[7];
      }
      function uu(e, t, n, r, o, i, a) {
        for (; null != n; ) {
          const f = r[n.index],
            p = n.type;
          if (
            (a && 0 === t && (f && Rn(ct(f), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & p) uu(e, t, n.child, r, o, i, !1), Xi(t, e, o, f, i);
            else if (32 & p) {
              const C = eu(n, r);
              let w;
              for (; (w = C()); ) Xi(t, e, o, w, i);
              Xi(t, e, o, f, i);
            } else 16 & p ? tf(e, t, r, n, o, i) : Xi(t, e, o, f, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Gs(e, t, n, r, o, i) {
        uu(n, r, e.firstChild, t, o, i, !1);
      }
      function tf(e, t, n, r, o, i) {
        const a = n[16],
          p = a[6].projection[r.projection];
        if (Array.isArray(p))
          for (let C = 0; C < p.length; C++) Xi(t, e, o, p[C], i);
        else uu(e, t, p, a[3], o, i, !0);
      }
      function nf(e, t, n) {
        e.setAttribute(t, "style", n);
      }
      function cu(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function rf(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const sf = "ng-template";
      function cy(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && "class" === o) {
            if (((o = e[r]), -1 !== rf(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && "string" == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function af(e) {
        return 4 === e.type && e.value !== sf;
      }
      function dy(e, t, n) {
        return t === (4 !== e.type || n ? e.value : sf);
      }
      function fy(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function gy(e) {
            for (let t = 0; t < e.length; t++) if (Es(e[t])) return t;
            return e.length;
          })(o);
        let a = !1;
        for (let f = 0; f < t.length; f++) {
          const p = t[f];
          if ("number" != typeof p) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== p && !dy(e, p, n)) || ("" === p && 1 === t.length))
                ) {
                  if (Or(r)) return !1;
                  a = !0;
                }
              } else {
                const C = 8 & r ? p : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!cy(e.attrs, C, n)) {
                    if (Or(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const T = hy(8 & r ? "class" : p, o, af(e), n);
                if (-1 === T) {
                  if (Or(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== C) {
                  let k;
                  k = T > i ? "" : o[T + 1].toLowerCase();
                  const Z = 8 & r ? k : null;
                  if ((Z && -1 !== rf(Z, C, 0)) || (2 & r && C !== k)) {
                    if (Or(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !Or(r) && !Or(p)) return !1;
            if (a && Or(p)) continue;
            (a = !1), (r = p | (1 & r));
          }
        }
        return Or(r) || a;
      }
      function Or(e) {
        return 0 == (1 & e);
      }
      function hy(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const a = t[o];
            if (a === e) return o;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let f = t[++o];
                for (; "string" == typeof f; ) f = t[++o];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function my(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function lf(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (fy(e, t[r], n)) return !0;
        return !1;
      }
      function uf(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function yy(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const f = e[++n];
              o += "[" + a + (f.length > 0 ? '="' + f + '"' : "") + "]";
            } else 8 & r ? (o += "." + a) : 4 & r && (o += " " + a);
          else
            "" !== o && !Or(a) && ((t += uf(i, o)), (o = "")),
              (r = a),
              (i = i || !Or(r));
          n++;
        }
        return "" !== o && (t += uf(i, o)), t;
      }
      const dt = {};
      function cf(e) {
        df(ht(), De(), mt() + e, !1);
      }
      function df(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && Li(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Vi(t, i, 0, n);
          }
        Ct(n);
      }
      function gf(e, t = null, n = null, r) {
        const o = mf(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function mf(e, t = null, n = null, r, o = new Set()) {
        const i = [n || lt, ev(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : Re(e))),
          new bd(i, t || Sa(), r || null, o)
        );
      }
      let bi = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return gf({ name: "" }, r, n, "");
            {
              const o = n.name ?? "";
              return gf({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Tn),
          (e.NULL = new vd()),
          (e.ɵprov = W({ token: e, providedIn: "any", factory: () => pn(gd) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function ts(e, t = P.Default) {
        const n = De();
        return null === n ? pn(e, t) : da(D(), n, Pe(e), t);
      }
      function Ef() {
        throw new Error("invalid");
      }
      function Oa(e, t) {
        return (e << 17) | (t << 2);
      }
      function Pr(e) {
        return (e >> 17) & 32767;
      }
      function gu(e) {
        return 2 | e;
      }
      function Co(e) {
        return (131068 & e) >> 2;
      }
      function mu(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function vu(e) {
        return 1 | e;
      }
      function Nf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              b(o), a.contentQueries(2, t[i], i);
            }
          }
      }
      function Na(e, t, n, r, o, i, a, f, p, C, w) {
        const T = t.blueprint.slice();
        return (
          (T[0] = o),
          (T[2] = 76 | r),
          (null !== w || (e && 1024 & e[2])) && (T[2] |= 1024),
          hr(T),
          (T[3] = T[15] = e),
          (T[8] = n),
          (T[10] = a || (e && e[10])),
          (T[11] = f || (e && e[11])),
          (T[12] = p || (e && e[12]) || null),
          (T[9] = C || (e && e[9]) || null),
          (T[6] = i),
          (T[20] = (function Ov() {
            return xv++;
          })()),
          (T[21] = w),
          (T[16] = 2 == t.type ? e[16] : T),
          T
        );
      }
      function ns(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function Mu(e, t, n, r, o) {
            const i = _(),
              a = re(),
              p = (e.data[t] = (function e_(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = p),
              null !== i &&
                (a
                  ? null == i.child && null !== p.parent && (i.child = p)
                  : null === i.next && (i.next = p)),
              p
            );
          })(e, t, n, r, o)),
            (function _s() {
              return nt.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const a = (function m() {
            const e = nt.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return A(i, !0), i;
      }
      function rs(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function Su(e, t, n) {
        R(t);
        try {
          const r = e.viewQuery;
          null !== r && Nu(1, r, n);
          const o = e.template;
          null !== o && Rf(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Nf(e, t),
            e.staticViewQueries && Nu(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function qy(e, t) {
              for (let n = 0; n < t.length; n++) m_(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), wt();
        }
      }
      function Ra(e, t, n, r) {
        const o = t[2];
        if (128 != (128 & o)) {
          R(t);
          try {
            hr(t),
              (function Tr(e) {
                return (nt.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Rf(e, t, n, 2, r);
            const a = 3 == (3 & o);
            if (a) {
              const C = e.preOrderCheckHooks;
              null !== C && Li(t, C, null);
            } else {
              const C = e.preOrderHooks;
              null !== C && Vi(t, C, 0, null), Cs(t, 0);
            }
            if (
              ((function p_(e) {
                for (let t = tu(e); null !== t; t = nu(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                      i = o[3];
                    0 == (512 & o[2]) && Oo(i, 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function h_(e) {
                for (let t = tu(e); null !== t; t = nu(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    go(r) && Ra(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && Nf(e, t),
              a)
            ) {
              const C = e.contentCheckHooks;
              null !== C && Li(t, C);
            } else {
              const C = e.contentHooks;
              null !== C && Vi(t, C, 1), Cs(t, 1);
            }
            !(function Jy(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) Ct(~o);
                    else {
                      const i = o,
                        a = n[++r],
                        f = n[++r];
                      ia(a, i), f(2, t[i]);
                    }
                  }
                } finally {
                  Ct(-1);
                }
            })(e, t);
            const f = e.components;
            null !== f &&
              (function Ky(e, t) {
                for (let n = 0; n < t.length; n++) g_(e, t[n]);
              })(t, f);
            const p = e.viewQuery;
            if ((null !== p && Nu(2, p, r), a)) {
              const C = e.viewCheckHooks;
              null !== C && Li(t, C);
            } else {
              const C = e.viewHooks;
              null !== C && Vi(t, C, 2), Cs(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), Oo(t[3], -1));
          } finally {
            wt();
          }
        }
      }
      function Rf(e, t, n, r, o) {
        const i = mt(),
          a = 2 & r;
        try {
          Ct(-1), a && t.length > 22 && df(e, t, 22, !1), n(r, o);
        } finally {
          Ct(i);
        }
      }
      function Au(e, t, n) {
        !Fo() ||
          ((function i_(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || hi(n, t), Rn(r, t);
            const a = n.initialInputs;
            for (let f = o; f < i; f++) {
              const p = e.data[f],
                C = _n(p);
              C && c_(t, n, p);
              const w = gi(t, e, f, n);
              Rn(w, t),
                null !== a && d_(0, f - o, w, p, 0, a),
                C && (Sn(n.index, t)[8] = w);
            }
          })(e, t, n, dn(n, t)),
          128 == (128 & n.flags) &&
            (function s_(e, t, n) {
              const r = n.directiveStart,
                o = n.directiveEnd,
                i = n.index,
                a = (function sa() {
                  return nt.lFrame.currentDirectiveIndex;
                })();
              try {
                Ct(i);
                for (let f = r; f < o; f++) {
                  const p = e.data[f],
                    C = t[f];
                  Ri(f),
                    (null !== p.hostBindings ||
                      0 !== p.hostVars ||
                      null !== p.hostAttrs) &&
                      $f(p, C);
                }
              } finally {
                Ct(-1), Ri(a);
              }
            })(e, t, n));
      }
      function Iu(e, t, n = dn) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              f = -1 === a ? n(t, e) : e[a];
            e[o++] = f;
          }
        }
      }
      function Lf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Tu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Tu(e, t, n, r, o, i, a, f, p, C) {
        const w = 22 + r,
          T = w + o,
          k = (function Qy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : dt);
            return n;
          })(w, T),
          Z = "function" == typeof C ? C() : C;
        return (k[1] = {
          type: e,
          blueprint: k,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: k.slice().fill(null, w),
          bindingStartIndex: w,
          expandoStartIndex: T,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: p,
          consts: Z,
          incompleteFirstPass: !1,
        });
      }
      function Vf(e, t, n, r) {
        const o = Yf(t);
        null === n
          ? o.push(r)
          : (o.push(n), e.firstCreatePass && Jf(e).push(r, o.length - 1));
      }
      function Bf(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, o)
              : (n[r] = [t, o]);
          }
        return n;
      }
      function Uf(e, t) {
        const r = t.directiveEnd,
          o = e.data,
          i = t.attrs,
          a = [];
        let f = null,
          p = null;
        for (let C = t.directiveStart; C < r; C++) {
          const w = o[C],
            T = w.inputs,
            k = null === i || af(t) ? null : f_(T, i);
          a.push(k), (f = Bf(T, C, f)), (p = Bf(w.outputs, C, p));
        }
        null !== f &&
          (f.hasOwnProperty("class") && (t.flags |= 16),
          f.hasOwnProperty("style") && (t.flags |= 32)),
          (t.initialInputs = a),
          (t.inputs = f),
          (t.outputs = p);
      }
      function lr(e, t, n, r, o, i, a, f) {
        const p = dn(t, n);
        let w,
          C = t.inputs;
        !f && null != C && (w = C[r])
          ? (Ru(e, n, w, r, o), zt(t) && jf(n, t.index))
          : 3 & t.type &&
            ((r = (function t_(e) {
              return "class" === e
                ? "className"
                : "for" === e
                ? "htmlFor"
                : "formaction" === e
                ? "formAction"
                : "innerHtml" === e
                ? "innerHTML"
                : "readonly" === e
                ? "readOnly"
                : "tabindex" === e
                ? "tabIndex"
                : e;
            })(r)),
            (o = null != a ? a(o, t.value || "", r) : o),
            i.setProperty(p, r, o));
      }
      function jf(e, t) {
        const n = Sn(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function xu(e, t, n, r) {
        let o = !1;
        if (Fo()) {
          const i = (function a_(e, t, n) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const a = r[i];
                  lf(n, a.selectors, !1) &&
                    (o || (o = []),
                    Uo(hi(n, t), e, a.type),
                    _n(a) ? (Gf(e, n), o.unshift(a)) : o.push(a));
                }
              return o;
            })(e, t, n),
            a = null === r ? null : { "": -1 };
          if (null !== i) {
            (o = !0), zf(n, e.data.length, i.length);
            for (let w = 0; w < i.length; w++) {
              const T = i[w];
              T.providersResolver && T.providersResolver(T);
            }
            let f = !1,
              p = !1,
              C = rs(e, t, i.length, null);
            for (let w = 0; w < i.length; w++) {
              const T = i[w];
              (n.mergedAttrs = Bi(n.mergedAttrs, T.hostAttrs)),
                Wf(e, n, t, C, T),
                u_(C, T, a),
                null !== T.contentQueries && (n.flags |= 8),
                (null !== T.hostBindings ||
                  null !== T.hostAttrs ||
                  0 !== T.hostVars) &&
                  (n.flags |= 128);
              const k = T.type.prototype;
              !f &&
                (k.ngOnChanges || k.ngOnInit || k.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (f = !0)),
                !p &&
                  (k.ngOnChanges || k.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (p = !0)),
                C++;
            }
            Uf(e, n);
          }
          a &&
            (function l_(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const i = n[t[o + 1]];
                  if (null == i) throw new q(-301, !1);
                  r.push(t[o], i);
                }
              }
            })(n, r, a);
        }
        return (n.mergedAttrs = Bi(n.mergedAttrs, n.attrs)), o;
      }
      function Hf(e, t, n, r, o, i) {
        const a = i.hostBindings;
        if (a) {
          let f = e.hostBindingOpCodes;
          null === f && (f = e.hostBindingOpCodes = []);
          const p = ~t.index;
          (function o_(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(f) != p && f.push(p),
            f.push(r, o, a);
        }
      }
      function $f(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Gf(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function u_(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          _n(t) && (n[""] = e);
        }
      }
      function zf(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Wf(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Un(o.type)),
          a = new ci(i, _n(o), ts);
        (e.blueprint[r] = a),
          (n[r] = a),
          Hf(e, t, 0, r, rs(e, n, o.hostVars, dt), o);
      }
      function c_(e, t, n) {
        const r = dn(t, e),
          o = Lf(n),
          i = e[10],
          a = ka(
            e,
            Na(
              e,
              o,
              null,
              n.onPush ? 32 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null,
              null
            )
          );
        e[t.index] = a;
      }
      function Qr(e, t, n, r, o, i) {
        const a = dn(e, t);
        !(function Ou(e, t, n, r, o, i, a) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const f = null == a ? j(i) : a(i, r || "", o);
            e.setAttribute(t, o, f, n);
          }
        })(t[11], a, i, e.value, n, r, o);
      }
      function d_(e, t, n, r, o, i) {
        const a = i[t];
        if (null !== a) {
          const f = r.setInput;
          for (let p = 0; p < a.length; ) {
            const C = a[p++],
              w = a[p++],
              T = a[p++];
            null !== f ? r.setInput(n, T, C, w) : (n[w] = T);
          }
        }
      }
      function f_(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              e.hasOwnProperty(o) &&
                (null === n && (n = []), n.push(o, e[o], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Zf(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function g_(e, t) {
        const n = Sn(t, e);
        if (go(n)) {
          const r = n[1];
          48 & n[2] ? Ra(r, n, r.template, n[8]) : n[5] > 0 && Pu(n);
        }
      }
      function Pu(e) {
        for (let r = tu(e); null !== r; r = nu(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (go(i))
              if (512 & i[2]) {
                const a = i[1];
                Ra(a, i, a.template, i[8]);
              } else i[5] > 0 && Pu(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = Sn(n[r], e);
            go(o) && o[5] > 0 && Pu(o);
          }
      }
      function m_(e, t) {
        const n = Sn(t, e),
          r = n[1];
        (function v_(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Su(r, n, n[8]);
      }
      function ka(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Fu(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = $s(e);
          if (Mo(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function La(e, t, n, r = !0) {
        const o = t[10];
        o.begin && o.begin();
        try {
          Ra(e, t, e.template, n);
        } catch (a) {
          throw (r && qf(t, a), a);
        } finally {
          o.end && o.end();
        }
      }
      function Nu(e, t, n) {
        b(0), t(e, n);
      }
      function Yf(e) {
        return e[7] || (e[7] = []);
      }
      function Jf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function qf(e, t) {
        const n = e[9],
          r = n ? n.get(js, null) : null;
        r && r.handleError(t);
      }
      function Ru(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            f = n[i++],
            p = t[a],
            C = e.data[a];
          null !== C.setInput ? C.setInput(p, o, r, f) : (p[f] = o);
        }
      }
      function Va(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const f = t[a];
            "number" == typeof f
              ? (i = f)
              : 1 == i
              ? (o = We(o, f))
              : 2 == i && (r = We(r, f + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Ba(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(ct(i)), Qt(i)))
            for (let f = 10; f < i.length; f++) {
              const p = i[f],
                C = p[1].firstChild;
              null !== C && Ba(p[1], p, C, r);
            }
          const a = n.type;
          if (8 & a) Ba(e, t, n.child, r);
          else if (32 & a) {
            const f = eu(n, t);
            let p;
            for (; (p = f()); ) r.push(p);
          } else if (16 & a) {
            const f = Xd(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const p = $s(t[16]);
              Ba(p[1], p, f, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class zs {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Ba(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Qt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (iu(t, r), zi(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Gd(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Vf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Fu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          La(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new q(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Xv(e, t) {
              Gs(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new q(902, !1);
          this._appRef = t;
        }
      }
      class y_ extends zs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          La(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class ku extends Bs {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = O(t);
          return new Ws(n, this.ngModule);
        }
      }
      function Qf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class D_ {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          const o = this.injector.get(t, Gl, r);
          return o !== Gl || n === Gl ? o : this.parentInjector.get(t, n, r);
        }
      }
      class Ws extends wd {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function _y(e) {
              return e.map(yy).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Qf(this.componentDef.inputs);
        }
        get outputs() {
          return Qf(this.componentDef.outputs);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof Di ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const a = i ? new D_(t, i) : t,
            f = a.get(Sd, null);
          if (null === f) throw new q(407, !1);
          const p = a.get(vv, null),
            C = f.createRenderer(null, this.componentDef),
            w = this.componentDef.selectors[0][0] || "div",
            T = r
              ? (function Xy(e, t, n) {
                  return e.selectRootElement(t, n === nn.ShadowDom);
                })(C, r, this.componentDef.encapsulation)
              : ou(
                  C,
                  w,
                  (function __(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(w)
                ),
            k = this.componentDef.onPush ? 288 : 272,
            Z = Tu(0, null, null, 1, 0, null, null, null, null, null),
            ge = Na(null, Z, null, k, null, null, f, C, p, a, null);
          let we, Ne;
          R(ge);
          try {
            const Ve = (function E_(e, t, n, r, o, i) {
              const a = n[1];
              n[22] = e;
              const p = ns(a, 22, 2, "#host", null),
                C = (p.mergedAttrs = t.hostAttrs);
              null !== C &&
                (Va(p, C, !0),
                null !== e &&
                  (fi(o, e, C),
                  null !== p.classes && cu(o, e, p.classes),
                  null !== p.styles && nf(o, e, p.styles)));
              const w = r.createRenderer(e, t),
                T = Na(
                  n,
                  Lf(t),
                  null,
                  t.onPush ? 32 : 16,
                  n[22],
                  p,
                  r,
                  w,
                  i || null,
                  null,
                  null
                );
              return (
                a.firstCreatePass &&
                  (Uo(hi(p, n), a, t.type), Gf(a, p), zf(p, n.length, 1)),
                ka(n, T),
                (n[22] = T)
              );
            })(T, this.componentDef, ge, f, C);
            if (T)
              if (r) fi(C, T, ["ng-version", yv.full]);
              else {
                const { attrs: qe, classes: Ce } = (function Dy(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === o
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === o && n.push(i);
                    else {
                      if (!Or(o)) break;
                      o = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                qe && fi(C, T, qe),
                  Ce && Ce.length > 0 && cu(C, T, Ce.join(" "));
              }
            if (((Ne = zr(Z, 22)), void 0 !== n)) {
              const qe = (Ne.projection = []);
              for (let Ce = 0; Ce < this.ngContentSelectors.length; Ce++) {
                const at = n[Ce];
                qe.push(null != at ? Array.from(at) : null);
              }
            }
            (we = (function w_(e, t, n, r) {
              const o = n[1],
                i = (function r_(e, t, n) {
                  const r = D();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Wf(e, r, t, rs(e, t, 1, null), n),
                    Uf(e, r));
                  const o = gi(t, e, r.directiveStart, r);
                  Rn(o, t);
                  const i = dn(r, t);
                  return i && Rn(i, t), o;
                })(o, n, t);
              if (((e[8] = n[8] = i), null !== r)) for (const f of r) f(i, t);
              if (t.contentQueries) {
                const f = D();
                t.contentQueries(1, i, f.directiveStart);
              }
              const a = D();
              return (
                !o.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (Ct(a.index),
                  Hf(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  $f(t, i)),
                i
              );
            })(Ve, this.componentDef, ge, [M_])),
              Su(Z, ge, null);
          } finally {
            wt();
          }
          return new b_(this.componentType, we, qi(Ne, ge), ge, Ne);
        }
      }
      class b_ extends class cv {} {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new y_(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            Ru(i[1], i, o, t, n), jf(i, this._tNode.index);
          }
        }
        get injector() {
          return new yo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function M_() {
        const e = D();
        vo(De()[1], e);
      }
      function Lu(e) {
        let t = (function Xf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (_n(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new q(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const a = e;
              (a.inputs = Vu(e.inputs)),
                (a.declaredInputs = Vu(e.declaredInputs)),
                (a.outputs = Vu(e.outputs));
              const f = o.hostBindings;
              f && T_(e, f);
              const p = o.viewQuery,
                C = o.contentQueries;
              if (
                (p && A_(e, p),
                C && I_(e, C),
                Te(e.inputs, o.inputs),
                Te(e.declaredInputs, o.declaredInputs),
                Te(e.outputs, o.outputs),
                _n(o) && o.data.animation)
              ) {
                const w = e.data;
                w.animation = (w.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const f = i[a];
                f && f.ngInherit && f(e), f === Lu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function S_(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Bi(o.hostAttrs, (n = Bi(n, o.hostAttrs))));
          }
        })(r);
      }
      function Vu(e) {
        return e === sn ? {} : e === lt ? [] : e;
      }
      function A_(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function I_(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function T_(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let Ua = null;
      function Ei() {
        if (!Ua) {
          const e = ze.Symbol;
          if (e && e.iterator) Ua = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ua = r);
            }
          }
        }
        return Ua;
      }
      function Zs(e) {
        return (
          !!Bu(e) && (Array.isArray(e) || (!(e instanceof Map) && Ei() in e))
        );
      }
      function Bu(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Xr(e, t, n) {
        return (e[t] = n);
      }
      function kn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function wi(e, t, n, r) {
        const o = kn(e, t, n);
        return kn(e, t + 1, r) || o;
      }
      function Uu(e, t, n, r) {
        const o = De();
        return kn(o, nr(), t) && (ht(), Qr(pt(), o, e, t, n, r)), Uu;
      }
      function is(e, t, n, r) {
        return kn(e, nr(), n) ? t + j(n) + r : dt;
      }
      function uh(e, t, n, r, o, i, a, f) {
        const p = De(),
          C = ht(),
          w = e + 22,
          T = C.firstCreatePass
            ? (function L_(e, t, n, r, o, i, a, f, p) {
                const C = t.consts,
                  w = ns(t, e, 4, a || null, tr(C, f));
                xu(t, n, w, tr(C, p)), vo(t, w);
                const T = (w.tViews = Tu(
                  2,
                  w,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  C
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, w),
                    (T.queries = t.queries.embeddedTView(w))),
                  w
                );
              })(w, C, p, t, n, r, o, i, a)
            : C.data[w];
        A(T, !1);
        const k = p[11].createComment("");
        Ia(C, p, k, T),
          Rn(k, p),
          ka(p, (p[w] = Zf(k, p, k, T))),
          Xn(T) && Au(C, p, T),
          null != a && Iu(p, T, f);
      }
      function ju(e, t, n) {
        const r = De();
        return kn(r, nr(), t) && lr(ht(), pt(), r, e, t, r[11], n, !1), ju;
      }
      function Hu(e, t, n, r, o) {
        const a = o ? "class" : "style";
        Ru(e, n, t.inputs[a], a, r);
      }
      function Ha(e, t, n, r) {
        const o = De(),
          i = ht(),
          a = 22 + e,
          f = o[11],
          p = (o[a] = ou(
            f,
            t,
            (function mo() {
              return nt.lFrame.currentNamespace;
            })()
          )),
          C = i.firstCreatePass
            ? (function U_(e, t, n, r, o, i, a) {
                const f = t.consts,
                  C = ns(t, e, 2, o, tr(f, i));
                return (
                  xu(t, n, C, tr(f, a)),
                  null !== C.attrs && Va(C, C.attrs, !1),
                  null !== C.mergedAttrs && Va(C, C.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, C),
                  C
                );
              })(a, i, o, 0, t, n, r)
            : i.data[a];
        A(C, !0);
        const w = C.mergedAttrs;
        null !== w && fi(f, p, w);
        const T = C.classes;
        null !== T && cu(f, p, T);
        const k = C.styles;
        return (
          null !== k && nf(f, p, k),
          64 != (64 & C.flags) && Ia(i, o, p, C),
          0 ===
            (function Zr() {
              return nt.lFrame.elementDepthCount;
            })() && Rn(p, o),
          (function si() {
            nt.lFrame.elementDepthCount++;
          })(),
          Xn(C) &&
            (Au(i, o, C),
            (function kf(e, t, n) {
              if (io(t)) {
                const o = t.directiveEnd;
                for (let i = t.directiveStart; i < o; i++) {
                  const a = e.data[i];
                  a.contentQueries && a.contentQueries(1, n[i], i);
                }
              }
            })(i, C, o)),
          null !== r && Iu(o, C),
          Ha
        );
      }
      function $a() {
        let e = D();
        re()
          ? (function Ge() {
              nt.lFrame.isParent = !1;
            })()
          : ((e = e.parent), A(e, !1));
        const t = e;
        !(function Fi() {
          nt.lFrame.elementDepthCount--;
        })();
        const n = ht();
        return (
          n.firstCreatePass && (vo(n, e), io(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function aa(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Hu(n, t, De(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function cl(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Hu(n, t, De(), t.stylesWithoutHost, !1),
          $a
        );
      }
      function $u(e, t, n, r) {
        return Ha(e, t, n, r), $a(), $u;
      }
      function dh() {
        return De();
      }
      function Wu(e) {
        return !!e && "function" == typeof e.then;
      }
      function fh(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const hh = fh;
      function Zu(e, t, n, r) {
        const o = De(),
          i = ht(),
          a = D();
        return (
          (function gh(e, t, n, r, o, i, a, f) {
            const p = Xn(r),
              w = e.firstCreatePass && Jf(e),
              T = t[8],
              k = Yf(t);
            let Z = !0;
            if (3 & r.type || f) {
              const Ne = dn(r, t),
                Ve = f ? f(Ne) : Ne,
                qe = k.length,
                Ce = f ? (Lt) => f(ct(Lt[r.index])) : r.index;
              let at = null;
              if (
                (!f &&
                  p &&
                  (at = (function H_(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const a = o[i];
                        if (a === n && o[i + 1] === r) {
                          const f = t[7],
                            p = o[i + 2];
                          return f.length > p ? f[p] : null;
                        }
                        "string" == typeof a && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== at)
              )
                ((at.__ngLastListenerFn__ || at).__ngNextListenerFn__ = i),
                  (at.__ngLastListenerFn__ = i),
                  (Z = !1);
              else {
                i = vh(r, t, T, i, !1);
                const Lt = n.listen(Ve, o, i);
                k.push(i, Lt), w && w.push(o, Ce, qe, qe + 1);
              }
            } else i = vh(r, t, T, i, !1);
            const ge = r.outputs;
            let we;
            if (Z && null !== ge && (we = ge[o])) {
              const Ne = we.length;
              if (Ne)
                for (let Ve = 0; Ve < Ne; Ve += 2) {
                  const en = t[we[Ve]][we[Ve + 1]].subscribe(i),
                    Ai = k.length;
                  k.push(i, en), w && w.push(o, r.index, Ai, -(Ai + 1));
                }
            }
          })(i, o, o[11], a, e, t, 0, r),
          Zu
        );
      }
      function mh(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return qf(e, o), !1;
        }
      }
      function vh(e, t, n, r, o) {
        return function i(a) {
          if (a === Function) return r;
          Fu(2 & e.flags ? Sn(e.index, t) : t);
          let p = mh(t, 0, r, a),
            C = i.__ngNextListenerFn__;
          for (; C; ) (p = mh(t, 0, C, a) && p), (C = C.__ngNextListenerFn__);
          return o && !1 === p && (a.preventDefault(), (a.returnValue = !1)), p;
        };
      }
      function yh(e = 1) {
        return (function Pt(e) {
          return (nt.lFrame.contextLView = (function _t(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, nt.lFrame.contextLView))[8];
        })(e);
      }
      function Yu(e, t, n) {
        return Ga(e, "", t, "", n), Yu;
      }
      function Ga(e, t, n, r, o) {
        const i = De(),
          a = is(i, t, n, r);
        return a !== dt && lr(ht(), pt(), i, e, a, i[11], o, !1), Ga;
      }
      function Ah(e, t, n, r, o) {
        const i = e[n + 1],
          a = null === t;
        let f = r ? Pr(i) : Co(i),
          p = !1;
        for (; 0 !== f && (!1 === p || a); ) {
          const w = e[f + 1];
          Y_(e[f], t) && ((p = !0), (e[f + 1] = r ? vu(w) : gu(w))),
            (f = r ? Pr(w) : Co(w));
        }
        p && (e[n + 1] = r ? gu(i) : vu(i));
      }
      function Y_(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && y(e, t) >= 0)
        );
      }
      function Ju(e, t) {
        return (
          (function Fr(e, t, n, r) {
            const o = De(),
              i = ht(),
              a = (function ar(e) {
                const t = nt.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            i.firstUpdatePass &&
              (function kh(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[mt()],
                    a = (function Rh(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Uh(e, t) {
                    return 0 != (e.flags & (t ? 16 : 32));
                  })(i, r) &&
                    null === t &&
                    !a &&
                    (t = !1),
                    (t = (function rD(e, t, n, r) {
                      const o = (function ki(e) {
                        const t = nt.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Js((n = Ku(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const a = t.directiveStylingLast;
                        if (-1 === a || e[a] !== o)
                          if (((n = Ku(o, e, t, n, r)), null === i)) {
                            let p = (function oD(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Co(r)) return e[Pr(r)];
                            })(e, t, r);
                            void 0 !== p &&
                              Array.isArray(p) &&
                              ((p = Ku(null, e, t, p[1], r)),
                              (p = Js(p, t.attrs, r)),
                              (function iD(e, t, n, r) {
                                e[Pr(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, p));
                          } else
                            i = (function sD(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = Js(r, e[i].hostAttrs, n);
                              return Js(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function W_(e, t, n, r, o, i) {
                      let a = i ? t.classBindings : t.styleBindings,
                        f = Pr(a),
                        p = Co(a);
                      e[r] = n;
                      let w,
                        C = !1;
                      if (Array.isArray(n)) {
                        const T = n;
                        (w = T[1]), (null === w || y(T, w) > 0) && (C = !0);
                      } else w = n;
                      if (o)
                        if (0 !== p) {
                          const k = Pr(e[f + 1]);
                          (e[r + 1] = Oa(k, f)),
                            0 !== k && (e[k + 1] = mu(e[k + 1], r)),
                            (e[f + 1] = (function By(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[f + 1], r));
                        } else
                          (e[r + 1] = Oa(f, 0)),
                            0 !== f && (e[f + 1] = mu(e[f + 1], r)),
                            (f = r);
                      else
                        (e[r + 1] = Oa(p, 0)),
                          0 === f ? (f = r) : (e[p + 1] = mu(e[p + 1], r)),
                          (p = r);
                      C && (e[r + 1] = gu(e[r + 1])),
                        Ah(e, w, r, !0),
                        Ah(e, w, r, !1),
                        (function Z_(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            "string" == typeof t &&
                            y(i, t) >= 0 &&
                            (n[r + 1] = vu(n[r + 1]));
                        })(t, w, e, r, i),
                        (a = Oa(f, p)),
                        i ? (t.classBindings = a) : (t.styleBindings = a);
                    })(o, i, t, n, a, r);
                }
              })(i, e, a, r),
              t !== dt &&
                kn(o, a, t) &&
                (function Vh(e, t, n, r, o, i, a, f) {
                  if (!(3 & t.type)) return;
                  const p = e.data,
                    C = p[f + 1];
                  za(
                    (function Sf(e) {
                      return 1 == (1 & e);
                    })(C)
                      ? Bh(p, t, n, o, Co(C), a)
                      : void 0
                  ) ||
                    (za(i) ||
                      ((function Mf(e) {
                        return 2 == (2 & e);
                      })(C) &&
                        (i = Bh(p, null, n, o, f, a))),
                    (function uy(e, t, n, r, o) {
                      if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let i = -1 === r.indexOf("-") ? void 0 : qr.DashCase;
                        null == o
                          ? e.removeStyle(n, r, i)
                          : ("string" == typeof o &&
                              o.endsWith("!important") &&
                              ((o = o.slice(0, -10)), (i |= qr.Important)),
                            e.setStyle(n, r, o, i));
                      }
                    })(r, a, po(mt(), n), o, i));
                })(
                  i,
                  i.data[mt()],
                  o,
                  o[11],
                  e,
                  (o[a + 1] = (function uD(e, t) {
                    return (
                      null == e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = Re(Zo(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  a
                );
          })(e, t, null, !0),
          Ju
        );
      }
      function Ku(e, t, n, r, o) {
        let i = null;
        const a = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (
          -1 === f ? (f = n.directiveStart) : f++;
          f < a && ((i = t[f]), (r = Js(r, i.hostAttrs, o)), i !== e);

        )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function Js(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            "number" == typeof a
              ? (o = a)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                s(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Bh(e, t, n, r, o, i) {
        const a = null === t;
        let f;
        for (; o > 0; ) {
          const p = e[o],
            C = Array.isArray(p),
            w = C ? p[1] : p,
            T = null === w;
          let k = n[o + 1];
          k === dt && (k = T ? lt : void 0);
          let Z = T ? h(k, r) : w === r ? k : void 0;
          if ((C && !za(Z) && (Z = h(p, r)), za(Z) && ((f = Z), a))) return f;
          const ge = e[o + 1];
          o = a ? Pr(ge) : Co(ge);
        }
        if (null !== t) {
          let p = i ? t.residualClasses : t.residualStyles;
          null != p && (f = h(p, r));
        }
        return f;
      }
      function za(e) {
        return void 0 !== e;
      }
      function jh(e, t = "") {
        const n = De(),
          r = ht(),
          o = e + 22,
          i = r.firstCreatePass ? ns(r, o, 1, t, null) : r.data[o],
          a = (n[o] = (function ru(e, t) {
            return e.createText(t);
          })(n[11], t));
        Ia(r, n, a, i), A(i, !1);
      }
      function qu(e) {
        return Wa("", e, ""), qu;
      }
      function Wa(e, t, n) {
        const r = De(),
          o = is(r, e, t, n);
        return (
          o !== dt &&
            (function bo(e, t, n) {
              const r = po(t, e);
              !(function Hd(e, t, n) {
                e.setValue(t, n);
              })(e[11], r, n);
            })(r, mt(), o),
          Wa
        );
      }
      const Mi = void 0;
      var TD = [
        "en",
        [["a", "p"], ["AM", "PM"], Mi],
        [["AM", "PM"], Mi, Mi],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Mi,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Mi,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Mi, "{1} 'at' {0}", Mi],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function ID(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let ps = {};
      function Qu(e) {
        const t = (function xD(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = lp(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = lp(r)), n)) return n;
        if ("en" === r) return TD;
        throw new q(701, !1);
      }
      function ap(e) {
        return Qu(e)[rt.PluralCase];
      }
      function lp(e) {
        return (
          e in ps ||
            (ps[e] =
              ze.ng &&
              ze.ng.common &&
              ze.ng.common.locales &&
              ze.ng.common.locales[e]),
          ps[e]
        );
      }
      var rt = (() => (
        ((rt = rt || {})[(rt.LocaleId = 0)] = "LocaleId"),
        (rt[(rt.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (rt[(rt.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (rt[(rt.DaysFormat = 3)] = "DaysFormat"),
        (rt[(rt.DaysStandalone = 4)] = "DaysStandalone"),
        (rt[(rt.MonthsFormat = 5)] = "MonthsFormat"),
        (rt[(rt.MonthsStandalone = 6)] = "MonthsStandalone"),
        (rt[(rt.Eras = 7)] = "Eras"),
        (rt[(rt.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (rt[(rt.WeekendRange = 9)] = "WeekendRange"),
        (rt[(rt.DateFormat = 10)] = "DateFormat"),
        (rt[(rt.TimeFormat = 11)] = "TimeFormat"),
        (rt[(rt.DateTimeFormat = 12)] = "DateTimeFormat"),
        (rt[(rt.NumberSymbols = 13)] = "NumberSymbols"),
        (rt[(rt.NumberFormats = 14)] = "NumberFormats"),
        (rt[(rt.CurrencyCode = 15)] = "CurrencyCode"),
        (rt[(rt.CurrencySymbol = 16)] = "CurrencySymbol"),
        (rt[(rt.CurrencyName = 17)] = "CurrencyName"),
        (rt[(rt.Currencies = 18)] = "Currencies"),
        (rt[(rt.Directionality = 19)] = "Directionality"),
        (rt[(rt.PluralCase = 20)] = "PluralCase"),
        (rt[(rt.ExtraData = 21)] = "ExtraData"),
        rt
      ))();
      const gs = "en-US";
      let up = gs;
      function tc(e, t, n, r, o) {
        if (((e = Pe(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) tc(e[i], t, n, r, o);
        else {
          const i = ht(),
            a = De();
          let f = _i(e) ? e : Pe(e.provide),
            p = Ed(e);
          const C = D(),
            w = 1048575 & C.providerIndexes,
            T = C.directiveStart,
            k = C.providerIndexes >> 20;
          if (_i(e) || !e.multi) {
            const Z = new ci(p, o, ts),
              ge = rc(f, t, o ? w : w + k, T);
            -1 === ge
              ? (Uo(hi(C, a), i, f),
                nc(i, e, t.length),
                t.push(f),
                C.directiveStart++,
                C.directiveEnd++,
                o && (C.providerIndexes += 1048576),
                n.push(Z),
                a.push(Z))
              : ((n[ge] = Z), (a[ge] = Z));
          } else {
            const Z = rc(f, t, w + k, T),
              ge = rc(f, t, w, w + k),
              we = Z >= 0 && n[Z],
              Ne = ge >= 0 && n[ge];
            if ((o && !Ne) || (!o && !we)) {
              Uo(hi(C, a), i, f);
              const Ve = (function AC(e, t, n, r, o) {
                const i = new ci(e, n, ts);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Np(i, o, r && !n),
                  i
                );
              })(o ? SC : MC, n.length, o, r, p);
              !o && Ne && (n[ge].providerFactory = Ve),
                nc(i, e, t.length, 0),
                t.push(f),
                C.directiveStart++,
                C.directiveEnd++,
                o && (C.providerIndexes += 1048576),
                n.push(Ve),
                a.push(Ve);
            } else nc(i, e, Z > -1 ? Z : ge, Np(n[o ? ge : Z], p, !o && r));
            !o && r && Ne && n[ge].componentProviders++;
          }
        }
      }
      function nc(e, t, n, r) {
        const o = _i(t),
          i = (function nv(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const p = (i ? Pe(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const C = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const w = C.indexOf(n);
              -1 === w ? C.push(n, [r, p]) : C[w + 1].push(r, p);
            } else C.push(n, p);
          }
        }
      }
      function Np(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function rc(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function MC(e, t, n, r) {
        return oc(this.multi, []);
      }
      function SC(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            f = gi(n, n[1], this.providerFactory.index, r);
          (i = f.slice(0, a)), oc(o, i);
          for (let p = a; p < f.length; p++) i.push(f[p]);
        } else (i = []), oc(o, i);
        return i;
      }
      function oc(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Rp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function wC(e, t, n) {
              const r = ht();
              if (r.firstCreatePass) {
                const o = _n(e);
                tc(n, r.data, r.blueprint, o, !0),
                  tc(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class ms {}
      class kp {}
      function IC(e, t) {
        return new Lp(e, t ?? null);
      }
      class Lp extends ms {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new ku(this));
          const r = Qe(t);
          (this._bootstrapComponents = Do(r.bootstrap)),
            (this._r3Injector = mf(
              t,
              n,
              [
                { provide: ms, useValue: this },
                { provide: Bs, useValue: this.componentFactoryResolver },
              ],
              Re(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ic extends kp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Lp(this.moduleType, t);
        }
      }
      class TC extends ms {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new ku(this)),
            (this.instance = null);
          const o = new bd(
            [
              ...t,
              { provide: ms, useValue: this },
              { provide: Bs, useValue: this.componentFactoryResolver },
            ],
            n || Sa(),
            r,
            new Set(["environment"])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function sc(e, t, n = null) {
        return new TC(e, t, n).injector;
      }
      let xC = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = yd(0, n.type),
                o =
                  r.length > 0
                    ? sc([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = W({
            token: e,
            providedIn: "environment",
            factory: () => new e(pn(Di)),
          })),
          e
        );
      })();
      function Vp(e) {
        e.getStandaloneInjector = (t) =>
          t.get(xC).getOrCreateStandaloneInjector(e);
      }
      function zp(e, t, n) {
        const r = on() + e,
          o = De();
        return o[r] === dt
          ? Xr(o, r, n ? t.call(n) : t())
          : (function Ys(e, t) {
              return e[t];
            })(o, r);
      }
      function Wp(e, t, n, r) {
        return Zp(De(), on(), e, t, n, r);
      }
      function ta(e, t) {
        const n = e[t];
        return n === dt ? void 0 : n;
      }
      function Zp(e, t, n, r, o, i) {
        const a = t + n;
        return kn(e, a, o)
          ? Xr(e, a + 1, i ? r.call(i, o) : r(o))
          : ta(e, a + 1);
      }
      function Jp(e, t, n, r, o, i, a, f) {
        const p = t + n;
        return (function ja(e, t, n, r, o) {
          const i = wi(e, t, n, r);
          return kn(e, t + 2, o) || i;
        })(e, p, o, i, a)
          ? Xr(e, p + 3, f ? r.call(f, o, i, a) : r(o, i, a))
          : ta(e, p + 3);
      }
      function Qp(e, t) {
        const n = ht();
        let r;
        const o = e + 22;
        n.firstCreatePass
          ? ((r = (function ZC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
          : (r = n.data[o]);
        const i = r.factory || (r.factory = Un(r.type)),
          a = de(ts);
        try {
          const f = Lo(!1),
            p = i();
          return (
            Lo(f),
            (function V_(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, De(), o, p),
            p
          );
        } finally {
          de(a);
        }
      }
      function Xp(e, t, n) {
        const r = e + 22,
          o = De(),
          i = Sr(o, r);
        return na(o, r) ? Zp(o, on(), t, i.transform, n, i) : i.transform(n);
      }
      function eg(e, t, n, r) {
        const o = e + 22,
          i = De(),
          a = Sr(i, o);
        return na(i, o)
          ? (function Yp(e, t, n, r, o, i, a) {
              const f = t + n;
              return wi(e, f, o, i)
                ? Xr(e, f + 2, a ? r.call(a, o, i) : r(o, i))
                : ta(e, f + 2);
            })(i, on(), t, a.transform, n, r, a)
          : a.transform(n, r);
      }
      function tg(e, t, n, r, o) {
        const i = e + 22,
          a = De(),
          f = Sr(a, i);
        return na(a, i)
          ? Jp(a, on(), t, f.transform, n, r, o, f)
          : f.transform(n, r, o);
      }
      function na(e, t) {
        return e[1].data[t].pure;
      }
      function lc(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const no = class KC extends d.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            a = r;
          if (t && "object" == typeof t) {
            const p = t;
            (o = p.next?.bind(p)),
              (i = p.error?.bind(p)),
              (a = p.complete?.bind(p));
          }
          this.__isAsync && ((i = lc(i)), o && (o = lc(o)), a && (a = lc(a)));
          const f = super.subscribe({ next: o, error: i, complete: a });
          return t instanceof l.w0 && t.add(f), f;
        }
      };
      function qC() {
        return this._results[Ei()]();
      }
      class uc {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Ei(),
            r = uc.prototype;
          r[n] || (r[n] = qC);
        }
        get changes() {
          return this._changes || (this._changes = new no());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = Hn(t);
          (this._changesDetected = !(function wl(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o),
            (r.length = o.length),
            (r.last = o[this.length - 1]),
            (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let ra = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = eb), e;
      })();
      const QC = ra,
        XC = class extends QC {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              o = Na(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[19];
            return (
              null !== a && (o[19] = a.createEmbeddedView(r)),
              Su(r, o, t),
              new zs(o)
            );
          }
        };
      function eb() {
        return qa(D(), De());
      }
      function qa(e, t) {
        return 4 & e.type ? new XC(t, e, qi(e, t)) : null;
      }
      let Qa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = tb), e;
      })();
      function tb() {
        return og(D(), De());
      }
      const nb = Qa,
        ng = class extends nb {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return qi(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new yo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Bo(this._hostTNode, this._hostLView);
            if (ua(t)) {
              const n = ko(t, this._hostLView),
                r = Ro(t);
              return new yo(n[1].data[r + 8], n);
            }
            return new yo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = rg(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            "number" == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const a = t.createEmbeddedView(n || {}, i);
            return this.insert(a, o), a;
          }
          createComponent(t, n, r, o, i) {
            const a =
              t &&
              !(function zo(e) {
                return "function" == typeof e;
              })(t);
            let f;
            if (a) f = n;
            else {
              const T = n || {};
              (f = T.index),
                (r = T.injector),
                (o = T.projectableNodes),
                (i = T.environmentInjector || T.ngModuleRef);
            }
            const p = a ? t : new Ws(O(t)),
              C = r || this.parentInjector;
            if (!i && null == p.ngModule) {
              const k = (a ? C : this.parentInjector).get(Di, null);
              k && (i = k);
            }
            const w = p.create(C, o, void 0, i);
            return this.insert(w.hostView, f), w;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function Wr(e) {
                return Qt(e[3]);
              })(r)
            ) {
              const w = this.indexOf(t);
              if (-1 !== w) this.detach(w);
              else {
                const T = r[3],
                  k = new ng(T, T[6], T[3]);
                k.detach(k.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function ty(e, t, n, r) {
              const o = 10 + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[o]), va(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const a = t[17];
              null !== a &&
                n !== a &&
                (function ny(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(a, t);
              const f = t[19];
              null !== f && f.insertView(e), (t[2] |= 64);
            })(o, r, a, i);
            const f = lu(i, a),
              p = r[11],
              C = Aa(p, a[7]);
            return (
              null !== C &&
                (function Qv(e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), Gs(e, r, n, 1, o, i);
                })(o, a[6], p, r, C, f),
              t.attachToViewContainerRef(),
              va(cc(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = rg(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = iu(this._lContainer, n);
            r && (zi(cc(this._lContainer), n), Gd(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = iu(this._lContainer, n);
            return r && null != zi(cc(this._lContainer), n) ? new zs(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function rg(e) {
        return e[8];
      }
      function cc(e) {
        return e[8] || (e[8] = []);
      }
      function og(e, t) {
        let n;
        const r = t[e.index];
        if (Qt(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = ct(r);
          else {
            const i = t[11];
            o = i.createComment("");
            const a = dn(e, t);
            Ci(
              i,
              Aa(i, a),
              o,
              (function sy(e, t) {
                return e.nextSibling(t);
              })(i, a),
              !1
            );
          }
          (t[e.index] = n = Zf(r, t, o, e)), ka(t, n);
        }
        return new ng(n, e, t);
      }
      class dc {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new dc(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class fc {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              o.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new fc(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== fg(t, n).matches && this.queries[n].setDirty();
        }
      }
      class ig {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class hc {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new hc(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class pc {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new pc(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, ib(n, i)),
                this.matchTNodeWithReadOption(t, n, Hi(n, t, i, !1, !1));
            }
          else
            r === ra
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Hi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Us || o === Qa || (o === ra && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Hi(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function ib(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function ab(e, t, n, r) {
        return -1 === n
          ? (function sb(e, t) {
              return 11 & e.type ? qi(e, t) : 4 & e.type ? qa(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function lb(e, t, n) {
              return n === Us
                ? qi(t, e)
                : n === ra
                ? qa(t, e)
                : n === Qa
                ? og(t, e)
                : void 0;
            })(e, t, r)
          : gi(e, e[1], n, t);
      }
      function sg(e, t, n, r) {
        const o = t[19].queries[r];
        if (null === o.matches) {
          const i = e.data,
            a = n.matches,
            f = [];
          for (let p = 0; p < a.length; p += 2) {
            const C = a[p];
            f.push(C < 0 ? null : ab(t, i[C], a[p + 1], n.metadata.read));
          }
          o.matches = f;
        }
        return o.matches;
      }
      function gc(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const a = sg(e, t, o, n);
          for (let f = 0; f < i.length; f += 2) {
            const p = i[f];
            if (p > 0) r.push(a[f / 2]);
            else {
              const C = i[f + 1],
                w = t[-p];
              for (let T = 10; T < w.length; T++) {
                const k = w[T];
                k[17] === k[3] && gc(k[1], k, C, r);
              }
              if (null !== w[9]) {
                const T = w[9];
                for (let k = 0; k < T.length; k++) {
                  const Z = T[k];
                  gc(Z[1], Z, C, r);
                }
              }
            }
          }
        }
        return r;
      }
      function ag(e) {
        const t = De(),
          n = ht(),
          r = g();
        b(r + 1);
        const o = fg(n, r);
        if (
          e.dirty &&
          (function ii(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? gc(n, t, r, []) : sg(n, t, o, r);
            e.reset(i, pv), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function lg(e, t, n, r) {
        const o = ht();
        if (o.firstCreatePass) {
          const i = D();
          (function dg(e, t, n) {
            null === e.queries && (e.queries = new hc()),
              e.queries.track(new pc(t, n));
          })(o, new ig(t, n, r), i.index),
            (function db(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        !(function cg(e, t, n) {
          const r = new uc(4 == (4 & n));
          Vf(e, t, r, r.destroy),
            null === t[19] && (t[19] = new fc()),
            t[19].queries.push(new dc(r));
        })(o, De(), n);
      }
      function ug() {
        return (function cb(e, t) {
          return e[19].queries[t].queryList;
        })(De(), g());
      }
      function fg(e, t) {
        return e.queries.getByIndex(t);
      }
      function el(...e) {}
      const Og = new Rt("Application Initializer");
      let tl = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = el),
              (this.reject = el),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Wu(i)) n.push(i);
                else if (hh(i)) {
                  const a = new Promise((f, p) => {
                    i.subscribe({ complete: f, error: p });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(Og, 8));
          }),
          (e.ɵprov = W({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Pg = new Rt("AppId", {
        providedIn: "root",
        factory: function Fg() {
          return `${Dc()}${Dc()}${Dc()}`;
        },
      });
      function Dc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ng = new Rt("Platform Initializer"),
        Pb = new Rt("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        Rg = new Rt("appBootstrapListener");
      let Fb = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = W({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const nl = new Rt("LocaleId", {
          providedIn: "root",
          factory: () =>
            Jc(nl, P.Optional | P.SkipSelf) ||
            (function Nb() {
              return (typeof $localize < "u" && $localize.locale) || gs;
            })(),
        }),
        Rb = new Rt("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class kb {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let Lb = (() => {
        class e {
          compileModuleSync(n) {
            return new ic(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = Do(Qe(n).declarations).reduce((a, f) => {
                const p = O(f);
                return p && a.push(new Ws(p)), a;
              }, []);
            return new kb(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = W({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Ub = (() => Promise.resolve(0))();
      function Cc(e) {
        typeof Zone > "u"
          ? Ub.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class yr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new no(!1)),
            (this.onMicrotaskEmpty = new no(!1)),
            (this.onStable = new no(!1)),
            (this.onError = new no(!1)),
            typeof Zone > "u")
          )
            throw new q(908, !1);
          Zone.assertZonePatched();
          const o = this;
          if (
            ((o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.AsyncStackTaggingZoneSpec)
          ) {
            const i = Zone.AsyncStackTaggingZoneSpec;
            o._inner = o._inner.fork(new i("Angular"));
          }
          Zone.TaskTrackingZoneSpec &&
            (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function jb() {
              let e = ze.requestAnimationFrame,
                t = ze.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function Gb(e) {
              const t = () => {
                !(function $b(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(ze, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Ec(e),
                                (e.isCheckStableRunning = !0),
                                bc(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Ec(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, a, f) => {
                  try {
                    return Vg(e), n.invokeTask(o, i, a, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Bg(e);
                  }
                },
                onInvoke: (n, r, o, i, a, f, p) => {
                  try {
                    return Vg(e), n.invoke(o, i, a, f, p);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Bg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          Ec(e),
                          bc(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!yr.isInAngularZone()) throw new q(909, !1);
        }
        static assertNotInAngularZone() {
          if (yr.isInAngularZone()) throw new q(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            a = i.scheduleEventTask("NgZoneEvent: " + o, t, Hb, el, el);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const Hb = {};
      function bc(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Ec(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Vg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Bg(e) {
        e._nesting--, bc(e);
      }
      class zb {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new no()),
            (this.onMicrotaskEmpty = new no()),
            (this.onStable = new no()),
            (this.onError = new no());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const Ug = new Rt(""),
        jg = new Rt("");
      let wc,
        Wb = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                wc ||
                  ((function Zb(e) {
                    wc = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      yr.assertNotInAngularZone(),
                        Cc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Cc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(pn(yr), pn(Hg), pn(jg));
            }),
            (e.ɵprov = W({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Hg = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return wc?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = W({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })(),
        Ko = null;
      const $g = new Rt("AllowMultipleToken"),
        Mc = new Rt("PlatformDestroyListeners");
      class Kb {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function zg(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new Rt(r);
        return (i = []) => {
          let a = Sc();
          if (!a || a.injector.get($g, !1)) {
            const f = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(f)
              : (function qb(e) {
                  if (Ko && !Ko.get($g, !1)) throw new q(400, !1);
                  Ko = e;
                  const t = e.get(Zg);
                  (function Gg(e) {
                    const t = e.get(Ng, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function Wg(e = [], t) {
                    return bi.create({
                      name: t,
                      providers: [
                        { provide: Ul, useValue: "platform" },
                        { provide: Mc, useValue: new Set([() => (Ko = null)]) },
                        ...e,
                      ],
                    });
                  })(f, r)
                );
          }
          return (function Xb(e) {
            const t = Sc();
            if (!t) throw new q(401, !1);
            return t;
          })();
        };
      }
      function Sc() {
        return Ko?.get(Zg) ?? null;
      }
      let Zg = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function Jg(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new zb()
                      : ("zone.js" === e ? void 0 : e) || new yr(t)),
                  n
                );
              })(
                r?.ngZone,
                (function Yg(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: yr, useValue: o }];
            return o.run(() => {
              const a = bi.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                f = n.create(a),
                p = f.injector.get(js, null);
              if (!p) throw new q(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const C = o.onError.subscribe({
                    next: (w) => {
                      p.handleError(w);
                    },
                  });
                  f.onDestroy(() => {
                    ol(this._modules, f), C.unsubscribe();
                  });
                }),
                (function Kg(e, t, n) {
                  try {
                    const r = n();
                    return Wu(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(p, o, () => {
                  const C = f.injector.get(tl);
                  return (
                    C.runInitializers(),
                    C.donePromise.then(
                      () => (
                        (function cp(e) {
                          ft(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (up = e.toLowerCase().replace(/_/g, "-"));
                        })(f.injector.get(nl, gs) || gs),
                        this._moduleDoBootstrap(f),
                        f
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = qg({}, r);
            return (function Yb(e, t, n) {
              const r = new ic(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(rl);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new q(403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new q(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(Mc, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(bi));
          }),
          (e.ɵprov = W({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function qg(e, t) {
        return Array.isArray(t) ? t.reduce(qg, e) : { ...e, ...t };
      }
      let rl = (() => {
        class e {
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new I.y((f) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    f.next(this._stable), f.complete();
                  });
              }),
              a = new I.y((f) => {
                let p;
                this._zone.runOutsideAngular(() => {
                  p = this._zone.onStable.subscribe(() => {
                    yr.assertNotInAngularZone(),
                      Cc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), f.next(!0));
                      });
                  });
                });
                const C = this._zone.onUnstable.subscribe(() => {
                  yr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        f.next(!1);
                      }));
                });
                return () => {
                  p.unsubscribe(), C.unsubscribe();
                };
              });
            this.isStable = (function X(...e) {
              const t = (0, H.yG)(e),
                n = (0, H._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, G.Xf)(r[0])
                  : (0, $.J)(n)((0, ve.D)(r, t))
                : he.E;
            })(
              i,
              a.pipe(
                (function Ee(e = {}) {
                  const {
                    connector: t = () => new d.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let a,
                      f,
                      p,
                      C = 0,
                      w = !1,
                      T = !1;
                    const k = () => {
                        f?.unsubscribe(), (f = void 0);
                      },
                      Z = () => {
                        k(), (a = p = void 0), (w = T = !1);
                      },
                      ge = () => {
                        const we = a;
                        Z(), we?.unsubscribe();
                      };
                    return (0, ie.e)((we, Ne) => {
                      C++, !T && !w && k();
                      const Ve = (p = p ?? t());
                      Ne.add(() => {
                        C--, 0 === C && !T && !w && (f = Ie(ge, o));
                      }),
                        Ve.subscribe(Ne),
                        !a &&
                          C > 0 &&
                          ((a = new ye.Hp({
                            next: (qe) => Ve.next(qe),
                            error: (qe) => {
                              (T = !0), k(), (f = Ie(Z, n, qe)), Ve.error(qe);
                            },
                            complete: () => {
                              (w = !0), k(), (f = Ie(Z, r)), Ve.complete();
                            },
                          })),
                          (0, G.Xf)(we).subscribe(a));
                    })(i);
                  };
                })()
              )
            );
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof wd;
            if (!this._injector.get(tl).done)
              throw (!o && Ke(n), new q(405, false));
            let a;
            (a = o ? n : this._injector.get(Bs).resolveComponentFactory(n)),
              this.componentTypes.push(a.componentType);
            const f = (function Jb(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(ms),
              C = a.create(bi.NULL, [], r || a.selector, f),
              w = C.location.nativeElement,
              T = C.injector.get(Ug, null);
            return (
              T?.registerApplication(w),
              C.onDestroy(() => {
                this.detachView(C.hostView),
                  ol(this.components, C),
                  T?.unregisterApplication(w);
              }),
              this._loadComponent(C),
              C
            );
          }
          tick() {
            if (this._runningTick) throw new q(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            ol(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Rg, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => ol(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new q(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(yr), pn(Di), pn(js));
          }),
          (e.ɵprov = W({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function ol(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let Xg = !0;
      function tE() {
        Xg = !1;
      }
      let nE = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = rE), e;
      })();
      function rE(e) {
        return (function oE(e, t, n) {
          if (zt(e) && !n) {
            const r = Sn(e.index, t);
            return new zs(r, r);
          }
          return 47 & e.type ? new zs(t[16], t) : null;
        })(D(), De(), 16 == (16 & e));
      }
      class om {
        constructor() {}
        supports(t) {
          return Zs(t);
        }
        create(t) {
          return new cE(t);
        }
      }
      const uE = (e, t) => t;
      class cE {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || uE);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < sm(r, o, i)) ? n : r,
              f = sm(a, o, i),
              p = a.currentIndex;
            if (a === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) o++;
            else {
              i || (i = []);
              const C = f - o,
                w = p - o;
              if (C != w) {
                for (let k = 0; k < C; k++) {
                  const Z = k < i.length ? i[k] : (i[k] = 0),
                    ge = Z + k;
                  w <= ge && ge < C && (i[k] = Z + 1);
                }
                i[a.previousIndex] = w - C;
              }
            }
            f !== p && t(a, f, p);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Zs(t))) throw new q(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (i = t[f]),
                (a = this._trackByFn(f, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, f)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, f)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function N_(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Ei()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (a = this._trackByFn(o, f)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, f, a, o)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, a, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new dE(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new im()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new im()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class dE {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class fE {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class im {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new fE()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function sm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class am {
        constructor() {}
        supports(t) {
          return t instanceof Map || Bu(t);
        }
        create() {
          return new hE();
        }
      }
      class hE {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Bu(t))) throw new q(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              a = o._next;
            return (
              i && (i._next = a),
              a && (a._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new pE(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class pE {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function lm() {
        return new Oc([new om()]);
      }
      let Oc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || lm()),
              deps: [[e, new Fs(), new Ps()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = W({ token: e, providedIn: "root", factory: lm })), e;
      })();
      function um() {
        return new Pc([new am()]);
      }
      let Pc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || um()),
              deps: [[e, new Fs(), new Ps()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = W({ token: e, providedIn: "root", factory: um })), e;
      })();
      const vE = zg(null, "core", []);
      let yE = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(rl));
          }),
          (e.ɵmod = Vn({ type: e })),
          (e.ɵinj = B({})),
          e
        );
      })();
      function _E(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
    },
    433: (je, ce, S) => {
      S.d(ce, {
        Fj: () => Oe,
        NI: () => wn,
        u: () => Un,
        cw: () => V,
        sg: () => Mn,
        u5: () => Zr,
        wO: () => ii,
        JJ: () => me,
        JL: () => P,
        On: () => So,
        YN: () => uo,
        UX: () => si,
        Q7: () => dn,
        kI: () => U,
        _Y: () => so,
        Kr: () => cn,
      });
      var d = S(8256),
        l = S(6895),
        I = S(2076),
        $ = S(9751),
        G = S(4742),
        he = S(8421),
        H = S(7669),
        ve = S(5403),
        X = S(3268),
        ye = S(1810),
        Ee = S(4004);
      let Ie = (() => {
          class D {
            constructor(m, A) {
              (this._renderer = m),
                (this._elementRef = A),
                (this.onChange = (re) => {}),
                (this.onTouched = () => {});
            }
            setProperty(m, A) {
              this._renderer.setProperty(this._elementRef.nativeElement, m, A);
            }
            registerOnTouched(m) {
              this.onTouched = m;
            }
            registerOnChange(m) {
              this.onChange = m;
            }
            setDisabledState(m) {
              this.setProperty("disabled", m);
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(d.Y36(d.Qsj), d.Y36(d.SBq));
            }),
            (D.ɵdir = d.lG2({ type: D })),
            D
          );
        })(),
        ae = (() => {
          class D extends Ie {}
          return (
            (D.ɵfac = (function () {
              let _;
              return function (A) {
                return (_ || (_ = d.n5z(D)))(A || D);
              };
            })()),
            (D.ɵdir = d.lG2({ type: D, features: [d.qOj] })),
            D
          );
        })();
      const Te = new d.OlP("NgValueAccessor"),
        Je = { provide: Te, useExisting: (0, d.Gpc)(() => Oe), multi: !0 },
        Pe = new d.OlP("CompositionEventMode");
      let Oe = (() => {
        class D extends Ie {
          constructor(m, A, re) {
            super(m, A),
              (this._compositionMode = re),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function vt() {
                  const D = (0, l.q)() ? (0, l.q)().getUserAgent() : "";
                  return /android (\d+)/.test(D.toLowerCase());
                })());
          }
          writeValue(m) {
            this.setProperty("value", m ?? "");
          }
          _handleInput(m) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(m);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(m) {
            (this._composing = !1), this._compositionMode && this.onChange(m);
          }
        }
        return (
          (D.ɵfac = function (m) {
            return new (m || D)(d.Y36(d.Qsj), d.Y36(d.SBq), d.Y36(Pe, 8));
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (m, A) {
              1 & m &&
                d.NdJ("input", function (Ge) {
                  return A._handleInput(Ge.target.value);
                })("blur", function () {
                  return A.onTouched();
                })("compositionstart", function () {
                  return A._compositionStart();
                })("compositionend", function (Ge) {
                  return A._compositionEnd(Ge.target.value);
                });
            },
            features: [d._Bn([Je]), d.qOj],
          })),
          D
        );
      })();
      function q(D) {
        return (
          null == D ||
          (("string" == typeof D || Array.isArray(D)) && 0 === D.length)
        );
      }
      function He(D) {
        return null != D && "number" == typeof D.length;
      }
      const j = new d.OlP("NgValidators"),
        Q = new d.OlP("NgAsyncValidators"),
        se =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class U {
        static min(_) {
          return (function L(D) {
            return (_) => {
              if (q(_.value) || q(D)) return null;
              const m = parseFloat(_.value);
              return !isNaN(m) && m < D
                ? { min: { min: D, actual: _.value } }
                : null;
            };
          })(_);
        }
        static max(_) {
          return (function Y(D) {
            return (_) => {
              if (q(_.value) || q(D)) return null;
              const m = parseFloat(_.value);
              return !isNaN(m) && m > D
                ? { max: { max: D, actual: _.value } }
                : null;
            };
          })(_);
        }
        static required(_) {
          return z(_);
        }
        static requiredTrue(_) {
          return (function be(D) {
            return !0 === D.value ? null : { required: !0 };
          })(_);
        }
        static email(_) {
          return (function fe(D) {
            return q(D.value) || se.test(D.value) ? null : { email: !0 };
          })(_);
        }
        static minLength(_) {
          return $e(_);
        }
        static maxLength(_) {
          return (function Xe(D) {
            return (_) =>
              He(_.value) && _.value.length > D
                ? {
                    maxlength: {
                      requiredLength: D,
                      actualLength: _.value.length,
                    },
                  }
                : null;
          })(_);
        }
        static pattern(_) {
          return (function Zt(D) {
            if (!D) return Ye;
            let _, m;
            return (
              "string" == typeof D
                ? ((m = ""),
                  "^" !== D.charAt(0) && (m += "^"),
                  (m += D),
                  "$" !== D.charAt(D.length - 1) && (m += "$"),
                  (_ = new RegExp(m)))
                : ((m = D.toString()), (_ = D)),
              (A) => {
                if (q(A.value)) return null;
                const re = A.value;
                return _.test(re)
                  ? null
                  : { pattern: { requiredPattern: m, actualValue: re } };
              }
            );
          })(_);
        }
        static nullValidator(_) {
          return null;
        }
        static compose(_) {
          return ft(_);
        }
        static composeAsync(_) {
          return Ln(_);
        }
      }
      function z(D) {
        return q(D.value) ? { required: !0 } : null;
      }
      function $e(D) {
        return (_) =>
          q(_.value) || !He(_.value)
            ? null
            : _.value.length < D
            ? { minlength: { requiredLength: D, actualLength: _.value.length } }
            : null;
      }
      function Ye(D) {
        return null;
      }
      function yt(D) {
        return null != D;
      }
      function Jt(D) {
        return (0, d.QGY)(D) ? (0, I.D)(D) : D;
      }
      function bt(D) {
        let _ = {};
        return (
          D.forEach((m) => {
            _ = null != m ? { ..._, ...m } : _;
          }),
          0 === Object.keys(_).length ? null : _
        );
      }
      function Kt(D, _) {
        return _.map((m) => m(D));
      }
      function Mt(D) {
        return D.map((_) =>
          (function Ut(D) {
            return !D.validate;
          })(_)
            ? _
            : (m) => _.validate(m)
        );
      }
      function ft(D) {
        if (!D) return null;
        const _ = D.filter(yt);
        return 0 == _.length
          ? null
          : function (m) {
              return bt(Kt(m, _));
            };
      }
      function ot(D) {
        return null != D ? ft(Mt(D)) : null;
      }
      function Ln(D) {
        if (!D) return null;
        const _ = D.filter(yt);
        return 0 == _.length
          ? null
          : function (m) {
              return (function ie(...D) {
                const _ = (0, H.jO)(D),
                  { args: m, keys: A } = (0, G.D)(D),
                  re = new $.y((Ge) => {
                    const { length: Wt } = m;
                    if (!Wt) return void Ge.complete();
                    const Fn = new Array(Wt);
                    let Ar = Wt,
                      Ir = Wt;
                    for (let on = 0; on < Wt; on++) {
                      let Dn = !1;
                      (0, he.Xf)(m[on]).subscribe(
                        (0, ve.x)(
                          Ge,
                          (Tr) => {
                            Dn || ((Dn = !0), Ir--), (Fn[on] = Tr);
                          },
                          () => Ar--,
                          void 0,
                          () => {
                            (!Ar || !Dn) &&
                              (Ir || Ge.next(A ? (0, ye.n)(A, Fn) : Fn),
                              Ge.complete());
                          }
                        )
                      );
                    }
                  });
                return _ ? re.pipe((0, X.Z)(_)) : re;
              })(Kt(m, _).map(Jt)).pipe((0, Ee.U)(bt));
            };
      }
      function ne(D) {
        return null != D ? Ln(Mt(D)) : null;
      }
      function Be(D, _) {
        return null === D ? [_] : Array.isArray(D) ? [...D, _] : [D, _];
      }
      function W(D) {
        return D._rawValidators;
      }
      function Fe(D) {
        return D._rawAsyncValidators;
      }
      function B(D) {
        return D ? (Array.isArray(D) ? D : [D]) : [];
      }
      function Se(D, _) {
        return Array.isArray(D) ? D.includes(_) : D === _;
      }
      function oe(D, _) {
        const m = B(_);
        return (
          B(D).forEach((re) => {
            Se(m, re) || m.push(re);
          }),
          m
        );
      }
      function ue(D, _) {
        return B(_).filter((m) => !Se(D, m));
      }
      class Et {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(_) {
          (this._rawValidators = _ || []),
            (this._composedValidatorFn = ot(this._rawValidators));
        }
        _setAsyncValidators(_) {
          (this._rawAsyncValidators = _ || []),
            (this._composedAsyncValidatorFn = ne(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(_) {
          this._onDestroyCallbacks.push(_);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((_) => _()),
            (this._onDestroyCallbacks = []);
        }
        reset(_) {
          this.control && this.control.reset(_);
        }
        hasError(_, m) {
          return !!this.control && this.control.hasError(_, m);
        }
        getError(_, m) {
          return this.control ? this.control.getError(_, m) : null;
        }
      }
      class Ht extends Et {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Yt extends Et {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class It {
        constructor(_) {
          this._cd = _;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let me = (() => {
          class D extends It {
            constructor(m) {
              super(m);
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(d.Y36(Yt, 2));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (m, A) {
                2 & m &&
                  d.ekj("ng-untouched", A.isUntouched)(
                    "ng-touched",
                    A.isTouched
                  )("ng-pristine", A.isPristine)("ng-dirty", A.isDirty)(
                    "ng-valid",
                    A.isValid
                  )("ng-invalid", A.isInvalid)("ng-pending", A.isPending);
              },
              features: [d.qOj],
            })),
            D
          );
        })(),
        P = (() => {
          class D extends It {
            constructor(m) {
              super(m);
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(d.Y36(Ht, 10));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (m, A) {
                2 & m &&
                  d.ekj("ng-untouched", A.isUntouched)(
                    "ng-touched",
                    A.isTouched
                  )("ng-pristine", A.isPristine)("ng-dirty", A.isDirty)(
                    "ng-valid",
                    A.isValid
                  )("ng-invalid", A.isInvalid)("ng-pending", A.isPending)(
                    "ng-submitted",
                    A.isSubmitted
                  );
              },
              features: [d.qOj],
            })),
            D
          );
        })();
      const mn = "VALID",
        jt = "INVALID",
        bn = "PENDING",
        zn = "DISABLED";
      function Wn(D) {
        return (Vn(D) ? D.validators : D) || null;
      }
      function ro(D) {
        return Array.isArray(D) ? ot(D) : D || null;
      }
      function Zn(D, _) {
        return (Vn(_) ? _.asyncValidators : D) || null;
      }
      function Yn(D) {
        return Array.isArray(D) ? ne(D) : D || null;
      }
      function Vn(D) {
        return null != D && !Array.isArray(D) && "object" == typeof D;
      }
      class J {
        constructor(_, m) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = _),
            (this._rawAsyncValidators = m),
            (this._composedValidatorFn = ro(this._rawValidators)),
            (this._composedAsyncValidatorFn = Yn(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(_) {
          this._rawValidators = this._composedValidatorFn = _;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(_) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = _;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === mn;
        }
        get invalid() {
          return this.status === jt;
        }
        get pending() {
          return this.status == bn;
        }
        get disabled() {
          return this.status === zn;
        }
        get enabled() {
          return this.status !== zn;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(_) {
          (this._rawValidators = _), (this._composedValidatorFn = ro(_));
        }
        setAsyncValidators(_) {
          (this._rawAsyncValidators = _),
            (this._composedAsyncValidatorFn = Yn(_));
        }
        addValidators(_) {
          this.setValidators(oe(_, this._rawValidators));
        }
        addAsyncValidators(_) {
          this.setAsyncValidators(oe(_, this._rawAsyncValidators));
        }
        removeValidators(_) {
          this.setValidators(ue(_, this._rawValidators));
        }
        removeAsyncValidators(_) {
          this.setAsyncValidators(ue(_, this._rawAsyncValidators));
        }
        hasValidator(_) {
          return Se(this._rawValidators, _);
        }
        hasAsyncValidator(_) {
          return Se(this._rawAsyncValidators, _);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(_ = {}) {
          (this.touched = !0),
            this._parent && !_.onlySelf && this._parent.markAsTouched(_);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((_) => _.markAllAsTouched());
        }
        markAsUntouched(_ = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((m) => {
              m.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !_.onlySelf && this._parent._updateTouched(_);
        }
        markAsDirty(_ = {}) {
          (this.pristine = !1),
            this._parent && !_.onlySelf && this._parent.markAsDirty(_);
        }
        markAsPristine(_ = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((m) => {
              m.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !_.onlySelf && this._parent._updatePristine(_);
        }
        markAsPending(_ = {}) {
          (this.status = bn),
            !1 !== _.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !_.onlySelf && this._parent.markAsPending(_);
        }
        disable(_ = {}) {
          const m = this._parentMarkedDirty(_.onlySelf);
          (this.status = zn),
            (this.errors = null),
            this._forEachChild((A) => {
              A.disable({ ..._, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== _.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ..._, skipPristineCheck: m }),
            this._onDisabledChange.forEach((A) => A(!0));
        }
        enable(_ = {}) {
          const m = this._parentMarkedDirty(_.onlySelf);
          (this.status = mn),
            this._forEachChild((A) => {
              A.enable({ ..._, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: _.emitEvent,
            }),
            this._updateAncestors({ ..._, skipPristineCheck: m }),
            this._onDisabledChange.forEach((A) => A(!1));
        }
        _updateAncestors(_) {
          this._parent &&
            !_.onlySelf &&
            (this._parent.updateValueAndValidity(_),
            _.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(_) {
          this._parent = _;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(_ = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === mn || this.status === bn) &&
                this._runAsyncValidator(_.emitEvent)),
            !1 !== _.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !_.onlySelf &&
              this._parent.updateValueAndValidity(_);
        }
        _updateTreeValidity(_ = { emitEvent: !0 }) {
          this._forEachChild((m) => m._updateTreeValidity(_)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: _.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? zn : mn;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(_) {
          if (this.asyncValidator) {
            (this.status = bn), (this._hasOwnPendingAsyncValidator = !0);
            const m = Jt(this.asyncValidator(this));
            this._asyncValidationSubscription = m.subscribe((A) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(A, { emitEvent: _ });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(_, m = {}) {
          (this.errors = _), this._updateControlsErrors(!1 !== m.emitEvent);
        }
        get(_) {
          let m = _;
          return null == m ||
            (Array.isArray(m) || (m = m.split(".")), 0 === m.length)
            ? null
            : m.reduce((A, re) => A && A._find(re), this);
        }
        getError(_, m) {
          const A = m ? this.get(m) : this;
          return A && A.errors ? A.errors[_] : null;
        }
        hasError(_, m) {
          return !!this.getError(_, m);
        }
        get root() {
          let _ = this;
          for (; _._parent; ) _ = _._parent;
          return _;
        }
        _updateControlsErrors(_) {
          (this.status = this._calculateStatus()),
            _ && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(_);
        }
        _initObservables() {
          (this.valueChanges = new d.vpe()), (this.statusChanges = new d.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? zn
            : this.errors
            ? jt
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(bn)
            ? bn
            : this._anyControlsHaveStatus(jt)
            ? jt
            : mn;
        }
        _anyControlsHaveStatus(_) {
          return this._anyControls((m) => m.status === _);
        }
        _anyControlsDirty() {
          return this._anyControls((_) => _.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((_) => _.touched);
        }
        _updatePristine(_ = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !_.onlySelf && this._parent._updatePristine(_);
        }
        _updateTouched(_ = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !_.onlySelf && this._parent._updateTouched(_);
        }
        _registerOnCollectionChange(_) {
          this._onCollectionChange = _;
        }
        _setUpdateStrategy(_) {
          Vn(_) && null != _.updateOn && (this._updateOn = _.updateOn);
        }
        _parentMarkedDirty(_) {
          return (
            !_ &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(_) {
          return null;
        }
      }
      class V extends J {
        constructor(_, m, A) {
          super(Wn(m), Zn(A, m)),
            (this.controls = _),
            this._initObservables(),
            this._setUpdateStrategy(m),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(_, m) {
          return this.controls[_]
            ? this.controls[_]
            : ((this.controls[_] = m),
              m.setParent(this),
              m._registerOnCollectionChange(this._onCollectionChange),
              m);
        }
        addControl(_, m, A = {}) {
          this.registerControl(_, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(_, m = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            delete this.controls[_],
            this.updateValueAndValidity({ emitEvent: m.emitEvent }),
            this._onCollectionChange();
        }
        setControl(_, m, A = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            delete this.controls[_],
            m && this.registerControl(_, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        contains(_) {
          return this.controls.hasOwnProperty(_) && this.controls[_].enabled;
        }
        setValue(_, m = {}) {
          (function _r(D, _, m) {
            D._forEachChild((A, re) => {
              if (void 0 === m[re]) throw new d.vHH(1002, "");
            });
          })(this, 0, _),
            Object.keys(_).forEach((A) => {
              (function ir(D, _, m) {
                const A = D.controls;
                if (!(_ ? Object.keys(A) : A).length) throw new d.vHH(1e3, "");
                if (!A[m]) throw new d.vHH(1001, "");
              })(this, !0, A),
                this.controls[A].setValue(_[A], {
                  onlySelf: !0,
                  emitEvent: m.emitEvent,
                });
            }),
            this.updateValueAndValidity(m);
        }
        patchValue(_, m = {}) {
          null != _ &&
            (Object.keys(_).forEach((A) => {
              const re = this.controls[A];
              re &&
                re.patchValue(_[A], { onlySelf: !0, emitEvent: m.emitEvent });
            }),
            this.updateValueAndValidity(m));
        }
        reset(_ = {}, m = {}) {
          this._forEachChild((A, re) => {
            A.reset(_[re], { onlySelf: !0, emitEvent: m.emitEvent });
          }),
            this._updatePristine(m),
            this._updateTouched(m),
            this.updateValueAndValidity(m);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (_, m, A) => ((_[A] = m.getRawValue()), _)
          );
        }
        _syncPendingControls() {
          let _ = this._reduceChildren(
            !1,
            (m, A) => !!A._syncPendingControls() || m
          );
          return _ && this.updateValueAndValidity({ onlySelf: !0 }), _;
        }
        _forEachChild(_) {
          Object.keys(this.controls).forEach((m) => {
            const A = this.controls[m];
            A && _(A, m);
          });
        }
        _setUpControls() {
          this._forEachChild((_) => {
            _.setParent(this),
              _._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(_) {
          for (const [m, A] of Object.entries(this.controls))
            if (this.contains(m) && _(A)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (m, A, re) => ((A.enabled || this.disabled) && (m[re] = A.value), m)
          );
        }
        _reduceChildren(_, m) {
          let A = _;
          return (
            this._forEachChild((re, Ge) => {
              A = m(A, re, Ge);
            }),
            A
          );
        }
        _allControlsDisabled() {
          for (const _ of Object.keys(this.controls))
            if (this.controls[_].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(_) {
          return this.controls.hasOwnProperty(_) ? this.controls[_] : null;
        }
      }
      function Qe(D, _) {
        return [..._.path, D];
      }
      function gt(D, _) {
        rn(D, _),
          _.valueAccessor.writeValue(D.value),
          D.disabled && _.valueAccessor.setDisabledState?.(!0),
          (function Gt(D, _) {
            _.valueAccessor.registerOnChange((m) => {
              (D._pendingValue = m),
                (D._pendingChange = !0),
                (D._pendingDirty = !0),
                "change" === D.updateOn && Nt(D, _);
            });
          })(D, _),
          (function vn(D, _) {
            const m = (A, re) => {
              _.valueAccessor.writeValue(A), re && _.viewToModelUpdate(A);
            };
            D.registerOnChange(m),
              _._registerOnDestroy(() => {
                D._unregisterOnChange(m);
              });
          })(D, _),
          (function On(D, _) {
            _.valueAccessor.registerOnTouched(() => {
              (D._pendingTouched = !0),
                "blur" === D.updateOn && D._pendingChange && Nt(D, _),
                "submit" !== D.updateOn && D.markAsTouched();
            });
          })(D, _),
          (function xt(D, _) {
            if (_.valueAccessor.setDisabledState) {
              const m = (A) => {
                _.valueAccessor.setDisabledState(A);
              };
              D.registerOnDisabledChange(m),
                _._registerOnDestroy(() => {
                  D._unregisterOnDisabledChange(m);
                });
            }
          })(D, _);
      }
      function Ae(D, _, m = !0) {
        const A = () => {};
        _.valueAccessor &&
          (_.valueAccessor.registerOnChange(A),
          _.valueAccessor.registerOnTouched(A)),
          xn(D, _),
          D &&
            (_._invokeOnDestroyCallbacks(),
            D._registerOnCollectionChange(() => {}));
      }
      function et(D, _) {
        D.forEach((m) => {
          m.registerOnValidatorChange && m.registerOnValidatorChange(_);
        });
      }
      function rn(D, _) {
        const m = W(D);
        null !== _.validator
          ? D.setValidators(Be(m, _.validator))
          : "function" == typeof m && D.setValidators([m]);
        const A = Fe(D);
        null !== _.asyncValidator
          ? D.setAsyncValidators(Be(A, _.asyncValidator))
          : "function" == typeof A && D.setAsyncValidators([A]);
        const re = () => D.updateValueAndValidity();
        et(_._rawValidators, re), et(_._rawAsyncValidators, re);
      }
      function xn(D, _) {
        let m = !1;
        if (null !== D) {
          if (null !== _.validator) {
            const re = W(D);
            if (Array.isArray(re) && re.length > 0) {
              const Ge = re.filter((Wt) => Wt !== _.validator);
              Ge.length !== re.length && ((m = !0), D.setValidators(Ge));
            }
          }
          if (null !== _.asyncValidator) {
            const re = Fe(D);
            if (Array.isArray(re) && re.length > 0) {
              const Ge = re.filter((Wt) => Wt !== _.asyncValidator);
              Ge.length !== re.length && ((m = !0), D.setAsyncValidators(Ge));
            }
          }
        }
        const A = () => {};
        return et(_._rawValidators, A), et(_._rawAsyncValidators, A), m;
      }
      function Nt(D, _) {
        D._pendingDirty && D.markAsDirty(),
          D.setValue(D._pendingValue, { emitModelToViewChange: !1 }),
          _.viewToModelUpdate(D._pendingValue),
          (D._pendingChange = !1);
      }
      function Bt(D, _) {
        if (!D.hasOwnProperty("model")) return !1;
        const m = D.model;
        return !!m.isFirstChange() || !Object.is(_, m.currentValue);
      }
      function ln(D, _) {
        if (!_) return null;
        let m, A, re;
        return (
          Array.isArray(_),
          _.forEach((Ge) => {
            Ge.constructor === Oe
              ? (m = Ge)
              : (function En(D) {
                  return Object.getPrototypeOf(D.constructor) === ae;
                })(Ge)
              ? (A = Ge)
              : (re = Ge);
          }),
          re || A || m || null
        );
      }
      function sr(D, _) {
        const m = D.indexOf(_);
        m > -1 && D.splice(m, 1);
      }
      function qn(D) {
        return (
          "object" == typeof D &&
          null !== D &&
          2 === Object.keys(D).length &&
          "value" in D &&
          "disabled" in D
        );
      }
      const wn = class extends J {
          constructor(_ = null, m, A) {
            super(Wn(m), Zn(A, m)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(_),
              this._setUpdateStrategy(m),
              this._initObservables(),
              this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
              }),
              Vn(m) &&
                (m.nonNullable || m.initialValueIsDefault) &&
                (this.defaultValue = qn(_) ? _.value : _);
          }
          setValue(_, m = {}) {
            (this.value = this._pendingValue = _),
              this._onChange.length &&
                !1 !== m.emitModelToViewChange &&
                this._onChange.forEach((A) =>
                  A(this.value, !1 !== m.emitViewToModelChange)
                ),
              this.updateValueAndValidity(m);
          }
          patchValue(_, m = {}) {
            this.setValue(_, m);
          }
          reset(_ = this.defaultValue, m = {}) {
            this._applyFormState(_),
              this.markAsPristine(m),
              this.markAsUntouched(m),
              this.setValue(this.value, m),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(_) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(_) {
            this._onChange.push(_);
          }
          _unregisterOnChange(_) {
            sr(this._onChange, _);
          }
          registerOnDisabledChange(_) {
            this._onDisabledChange.push(_);
          }
          _unregisterOnDisabledChange(_) {
            sr(this._onDisabledChange, _);
          }
          _forEachChild(_) {}
          _syncPendingControls() {
            return !(
              "submit" !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1,
              }),
              0)
            );
          }
          _applyFormState(_) {
            qn(_)
              ? ((this.value = this._pendingValue = _.value),
                _.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = _);
          }
        },
        _n = { provide: Yt, useExisting: (0, d.Gpc)(() => So) },
        Mo = (() => Promise.resolve())();
      let So = (() => {
          class D extends Yt {
            constructor(m, A, re, Ge, Wt) {
              super(),
                (this._changeDetectorRef = Wt),
                (this.control = new wn()),
                (this._registered = !1),
                (this.update = new d.vpe()),
                (this._parent = m),
                this._setValidators(A),
                this._setAsyncValidators(re),
                (this.valueAccessor = ln(0, Ge));
            }
            ngOnChanges(m) {
              if ((this._checkForErrors(), !this._registered || "name" in m)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const A = m.name.previousValue;
                  this.formDirective.removeControl({
                    name: A,
                    path: this._getPath(A),
                  });
                }
                this._setUpControl();
              }
              "isDisabled" in m && this._updateDisabled(m),
                Bt(m, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(m) {
              (this.viewModel = m), this.update.emit(m);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              gt(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(m) {
              Mo.then(() => {
                this.control.setValue(m, { emitViewToModelChange: !1 }),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(m) {
              const A = m.isDisabled.currentValue,
                re = 0 !== A && (0, d.D6c)(A);
              Mo.then(() => {
                re && !this.control.disabled
                  ? this.control.disable()
                  : !re && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(m) {
              return this._parent ? Qe(m, this._parent) : [m];
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(
                d.Y36(Ht, 9),
                d.Y36(j, 10),
                d.Y36(Q, 10),
                d.Y36(Te, 10),
                d.Y36(d.sBO, 8)
              );
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [d._Bn([_n]), d.qOj, d.TTD],
            })),
            D
          );
        })(),
        so = (() => {
          class D {}
          return (
            (D.ɵfac = function (m) {
              return new (m || D)();
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            D
          );
        })(),
        ei = (() => {
          class D {}
          return (
            (D.ɵfac = function (m) {
              return new (m || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({})),
            D
          );
        })();
      const Io = new d.OlP("NgModelWithFormControlWarning"),
        lo = { provide: Ht, useExisting: (0, d.Gpc)(() => Mn) };
      let Mn = (() => {
        class D extends Ht {
          constructor(m, A) {
            super(),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new d.vpe()),
              this._setValidators(m),
              this._setAsyncValidators(A);
          }
          ngOnChanges(m) {
            this._checkFormPresent(),
              m.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (xn(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(m) {
            const A = this.form.get(m.path);
            return (
              gt(A, m),
              A.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(m),
              A
            );
          }
          getControl(m) {
            return this.form.get(m.path);
          }
          removeControl(m) {
            Ae(m.control || null, m, !1),
              (function Kn(D, _) {
                const m = D.indexOf(_);
                m > -1 && D.splice(m, 1);
              })(this.directives, m);
          }
          addFormGroup(m) {
            this._setUpFormContainer(m);
          }
          removeFormGroup(m) {
            this._cleanUpFormContainer(m);
          }
          getFormGroup(m) {
            return this.form.get(m.path);
          }
          addFormArray(m) {
            this._setUpFormContainer(m);
          }
          removeFormArray(m) {
            this._cleanUpFormContainer(m);
          }
          getFormArray(m) {
            return this.form.get(m.path);
          }
          updateModel(m, A) {
            this.form.get(m.path).setValue(A);
          }
          onSubmit(m) {
            return (
              (this.submitted = !0),
              (function Jn(D, _) {
                D._syncPendingControls(),
                  _.forEach((m) => {
                    const A = m.control;
                    "submit" === A.updateOn &&
                      A._pendingChange &&
                      (m.viewToModelUpdate(A._pendingValue),
                      (A._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(m),
              "dialog" === m?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(m) {
            this.form.reset(m), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((m) => {
              const A = m.control,
                re = this.form.get(m.path);
              A !== re &&
                (Ae(A || null, m),
                ((D) => D instanceof wn)(re) && (gt(re, m), (m.control = re)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(m) {
            const A = this.form.get(m.path);
            (function Bn(D, _) {
              rn(D, _);
            })(A, m),
              A.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(m) {
            if (this.form) {
              const A = this.form.get(m.path);
              A &&
                (function ut(D, _) {
                  return xn(D, _);
                })(A, m) &&
                A.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            rn(this.form, this), this._oldForm && xn(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (D.ɵfac = function (m) {
            return new (m || D)(d.Y36(j, 10), d.Y36(Q, 10));
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (m, A) {
              1 & m &&
                d.NdJ("submit", function (Ge) {
                  return A.onSubmit(Ge);
                })("reset", function () {
                  return A.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [d._Bn([lo]), d.qOj, d.TTD],
          })),
          D
        );
      })();
      const Oi = { provide: Yt, useExisting: (0, d.Gpc)(() => Un) };
      let Un = (() => {
        class D extends Yt {
          constructor(m, A, re, Ge, Wt) {
            super(),
              (this._ngModelWarningConfig = Wt),
              (this._added = !1),
              (this.update = new d.vpe()),
              (this._ngModelWarningSent = !1),
              (this._parent = m),
              this._setValidators(A),
              this._setAsyncValidators(re),
              (this.valueAccessor = ln(0, Ge));
          }
          set isDisabled(m) {}
          ngOnChanges(m) {
            this._added || this._setUpControl(),
              Bt(m, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(m) {
            (this.viewModel = m), this.update.emit(m);
          }
          get path() {
            return Qe(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              (this._added = !0);
          }
        }
        return (
          (D._ngModelWarningSentOnce = !1),
          (D.ɵfac = function (m) {
            return new (m || D)(
              d.Y36(Ht, 13),
              d.Y36(j, 10),
              d.Y36(Q, 10),
              d.Y36(Te, 10),
              d.Y36(Io, 8)
            );
          }),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [["", "formControlName", ""]],
            inputs: {
              name: ["formControlName", "name"],
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            features: [d._Bn([Oi]), d.qOj, d.TTD],
          })),
          D
        );
      })();
      const wr = { provide: Te, useExisting: (0, d.Gpc)(() => Ur), multi: !0 };
      function Mr(D, _) {
        return null == D
          ? `${_}`
          : (_ && "object" == typeof _ && (_ = "Object"),
            `${D}: ${_}`.slice(0, 50));
      }
      let Ur = (() => {
          class D extends ae {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              this.value = m;
              const re = Mr(this._getOptionId(m), m);
              this.setProperty("value", re);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                (this.value = this._getOptionValue(A)), m(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A), m)) return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function Br(D) {
                return D.split(":")[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A) : m;
            }
          }
          return (
            (D.ɵfac = (function () {
              let _;
              return function (A) {
                return (_ || (_ = d.n5z(D)))(A || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["select", "formControlName", "", 3, "multiple", ""],
                ["select", "formControl", "", 3, "multiple", ""],
                ["select", "ngModel", "", 3, "multiple", ""],
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  d.NdJ("change", function (Ge) {
                    return A.onChange(Ge.target.value);
                  })("blur", function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [d._Bn([wr]), d.qOj],
            })),
            D
          );
        })(),
        uo = (() => {
          class D {
            constructor(m, A, re) {
              (this._element = m),
                (this._renderer = A),
                (this._select = re),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(m) {
              null != this._select &&
                (this._select._optionMap.set(this.id, m),
                this._setElementValue(Mr(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._setElementValue(m),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(Ur, 9));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            D
          );
        })();
      const co = { provide: Te, useExisting: (0, d.Gpc)(() => fo), multi: !0 };
      function To(D, _) {
        return null == D
          ? `${_}`
          : ("string" == typeof _ && (_ = `'${_}'`),
            _ && "object" == typeof _ && (_ = "Object"),
            `${D}: ${_}`.slice(0, 50));
      }
      let fo = (() => {
          class D extends ae {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              let A;
              if (((this.value = m), Array.isArray(m))) {
                const re = m.map((Ge) => this._getOptionId(Ge));
                A = (Ge, Wt) => {
                  Ge._setSelected(re.indexOf(Wt.toString()) > -1);
                };
              } else
                A = (re, Ge) => {
                  re._setSelected(!1);
                };
              this._optionMap.forEach(A);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                const re = [],
                  Ge = A.selectedOptions;
                if (void 0 !== Ge) {
                  const Wt = Ge;
                  for (let Fn = 0; Fn < Wt.length; Fn++) {
                    const Ir = this._getOptionValue(Wt[Fn].value);
                    re.push(Ir);
                  }
                } else {
                  const Wt = A.options;
                  for (let Fn = 0; Fn < Wt.length; Fn++) {
                    const Ar = Wt[Fn];
                    if (Ar.selected) {
                      const Ir = this._getOptionValue(Ar.value);
                      re.push(Ir);
                    }
                  }
                }
                (this.value = re), m(re);
              };
            }
            _registerOption(m) {
              const A = (this._idCounter++).toString();
              return this._optionMap.set(A, m), A;
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A)._value, m))
                  return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function jr(D) {
                return D.split(":")[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A)._value : m;
            }
          }
          return (
            (D.ɵfac = (function () {
              let _;
              return function (A) {
                return (_ || (_ = d.n5z(D)))(A || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["select", "multiple", "", "formControlName", ""],
                ["select", "multiple", "", "formControl", ""],
                ["select", "multiple", "", "ngModel", ""],
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  d.NdJ("change", function (Ge) {
                    return A.onChange(Ge.target);
                  })("blur", function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [d._Bn([co]), d.qOj],
            })),
            D
          );
        })(),
        cn = (() => {
          class D {
            constructor(m, A, re) {
              (this._element = m),
                (this._renderer = A),
                (this._select = re),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(m) {
              null != this._select &&
                ((this._value = m),
                this._setElementValue(To(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._select
                ? ((this._value = m),
                  this._setElementValue(To(this.id, m)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(m);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                m
              );
            }
            _setSelected(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "selected",
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(fo, 9));
            }),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            D
          );
        })();
      let jn = (() => {
        class D {
          constructor() {
            this._validator = Ye;
          }
          ngOnChanges(m) {
            if (this.inputName in m) {
              const A = this.normalizeInput(m[this.inputName].currentValue);
              (this._enabled = this.enabled(A)),
                (this._validator = this._enabled
                  ? this.createValidator(A)
                  : Ye),
                this._onChange && this._onChange();
            }
          }
          validate(m) {
            return this._validator(m);
          }
          registerOnValidatorChange(m) {
            this._onChange = m;
          }
          enabled(m) {
            return null != m;
          }
        }
        return (
          (D.ɵfac = function (m) {
            return new (m || D)();
          }),
          (D.ɵdir = d.lG2({ type: D, features: [d.TTD] })),
          D
        );
      })();
      const $r = { provide: j, useExisting: (0, d.Gpc)(() => dn), multi: !0 };
      let dn = (() => {
        class D extends jn {
          constructor() {
            super(...arguments),
              (this.inputName = "required"),
              (this.normalizeInput = d.D6c),
              (this.createValidator = (m) => z);
          }
          enabled(m) {
            return m;
          }
        }
        return (
          (D.ɵfac = (function () {
            let _;
            return function (A) {
              return (_ || (_ = d.n5z(D)))(A || D);
            };
          })()),
          (D.ɵdir = d.lG2({
            type: D,
            selectors: [
              [
                "",
                "required",
                "",
                "formControlName",
                "",
                3,
                "type",
                "checkbox",
              ],
              ["", "required", "", "formControl", "", 3, "type", "checkbox"],
              ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
            ],
            hostVars: 1,
            hostBindings: function (m, A) {
              2 & m && d.uIk("required", A._enabled ? "" : null);
            },
            inputs: { required: "required" },
            features: [d._Bn([$r]), d.qOj],
          })),
          D
        );
      })();
      const Sn = { provide: j, useExisting: (0, d.Gpc)(() => ii), multi: !0 };
      let ii = (() => {
          class D extends jn {
            constructor() {
              super(...arguments),
                (this.inputName = "minlength"),
                (this.normalizeInput = (m) =>
                  (function fr(D) {
                    return "number" == typeof D ? D : parseInt(D, 10);
                  })(m)),
                (this.createValidator = (m) => $e(m));
            }
          }
          return (
            (D.ɵfac = (function () {
              let _;
              return function (A) {
                return (_ || (_ = d.n5z(D)))(A || D);
              };
            })()),
            (D.ɵdir = d.lG2({
              type: D,
              selectors: [
                ["", "minlength", "", "formControlName", ""],
                ["", "minlength", "", "formControl", ""],
                ["", "minlength", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (m, A) {
                2 & m && d.uIk("minlength", A._enabled ? A.minlength : null);
              },
              inputs: { minlength: "minlength" },
              features: [d._Bn([Sn]), d.qOj],
            })),
            D
          );
        })(),
        Po = (() => {
          class D {}
          return (
            (D.ɵfac = function (m) {
              return new (m || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({ imports: [ei] })),
            D
          );
        })(),
        Zr = (() => {
          class D {}
          return (
            (D.ɵfac = function (m) {
              return new (m || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({ imports: [Po] })),
            D
          );
        })(),
        si = (() => {
          class D {
            static withConfig(m) {
              return {
                ngModule: D,
                providers: [
                  { provide: Io, useValue: m.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (D.ɵfac = function (m) {
              return new (m || D)();
            }),
            (D.ɵmod = d.oAB({ type: D })),
            (D.ɵinj = d.cJS({ imports: [Po] })),
            D
          );
        })();
    },
    1481: (je, ce, S) => {
      S.d(ce, { Dx: () => me, b2: () => Ht, q6: () => Se });
      var d = S(6895),
        l = S(8256);
      class I extends d.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class $ extends I {
        static makeCurrent() {
          (0, d.HT)(new $());
        }
        onAndCancel(V, O, K) {
          return (
            V.addEventListener(O, K, !1),
            () => {
              V.removeEventListener(O, K, !1);
            }
          );
        }
        dispatchEvent(V, O) {
          V.dispatchEvent(O);
        }
        remove(V) {
          V.parentNode && V.parentNode.removeChild(V);
        }
        createElement(V, O) {
          return (O = O || this.getDefaultDocument()).createElement(V);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(V) {
          return V.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(V) {
          return V instanceof DocumentFragment;
        }
        getGlobalEventTarget(V, O) {
          return "window" === O
            ? window
            : "document" === O
            ? V
            : "body" === O
            ? V.body
            : null;
        }
        getBaseHref(V) {
          const O = (function he() {
            return (
              (G = G || document.querySelector("base")),
              G ? G.getAttribute("href") : null
            );
          })();
          return null == O
            ? null
            : (function ve(J) {
                (H = H || document.createElement("a")),
                  H.setAttribute("href", J);
                const V = H.pathname;
                return "/" === V.charAt(0) ? V : `/${V}`;
              })(O);
        }
        resetBaseElement() {
          G = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(V) {
          return (0, d.Mx)(document.cookie, V);
        }
      }
      let H,
        G = null;
      const X = new l.OlP("TRANSITION_ID"),
        ie = [
          {
            provide: l.ip1,
            useFactory: function ye(J, V, O) {
              return () => {
                O.get(l.CZH).donePromise.then(() => {
                  const K = (0, d.q)(),
                    pe = V.querySelectorAll(`style[ng-transition="${J}"]`);
                  for (let Ke = 0; Ke < pe.length; Ke++) K.remove(pe[Ke]);
                });
              };
            },
            deps: [X, d.K0, l.zs3],
            multi: !0,
          },
        ];
      let Ie = (() => {
        class J {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (J.ɵfac = function (O) {
            return new (O || J)();
          }),
          (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
          J
        );
      })();
      const ae = new l.OlP("EventManagerPlugins");
      let Te = (() => {
        class J {
          constructor(O, K) {
            (this._zone = K),
              (this._eventNameToPlugin = new Map()),
              O.forEach((pe) => (pe.manager = this)),
              (this._plugins = O.slice().reverse());
          }
          addEventListener(O, K, pe) {
            return this._findPluginFor(K).addEventListener(O, K, pe);
          }
          addGlobalEventListener(O, K, pe) {
            return this._findPluginFor(K).addGlobalEventListener(O, K, pe);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(O) {
            const K = this._eventNameToPlugin.get(O);
            if (K) return K;
            const pe = this._plugins;
            for (let Ke = 0; Ke < pe.length; Ke++) {
              const Qe = pe[Ke];
              if (Qe.supports(O)) return this._eventNameToPlugin.set(O, Qe), Qe;
            }
            throw new Error(`No event manager plugin found for event ${O}`);
          }
        }
        return (
          (J.ɵfac = function (O) {
            return new (O || J)(l.LFG(ae), l.LFG(l.R0b));
          }),
          (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
          J
        );
      })();
      class Re {
        constructor(V) {
          this._doc = V;
        }
        addGlobalEventListener(V, O, K) {
          const pe = (0, d.q)().getGlobalEventTarget(this._doc, V);
          if (!pe)
            throw new Error(`Unsupported event target ${pe} for event ${O}`);
          return this.addEventListener(pe, O, K);
        }
      }
      let We = (() => {
          class J {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(O) {
              const K = new Set();
              O.forEach((pe) => {
                this._stylesSet.has(pe) || (this._stylesSet.add(pe), K.add(pe));
              }),
                this.onStylesAdded(K);
            }
            onStylesAdded(O) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (J.ɵfac = function (O) {
              return new (O || J)();
            }),
            (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
            J
          );
        })(),
        Je = (() => {
          class J extends We {
            constructor(O) {
              super(),
                (this._doc = O),
                (this._hostNodes = new Map()),
                this._hostNodes.set(O.head, []);
            }
            _addStylesToHost(O, K, pe) {
              O.forEach((Ke) => {
                const Qe = this._doc.createElement("style");
                (Qe.textContent = Ke), pe.push(K.appendChild(Qe));
              });
            }
            addHost(O) {
              const K = [];
              this._addStylesToHost(this._stylesSet, O, K),
                this._hostNodes.set(O, K);
            }
            removeHost(O) {
              const K = this._hostNodes.get(O);
              K && K.forEach(vt), this._hostNodes.delete(O);
            }
            onStylesAdded(O) {
              this._hostNodes.forEach((K, pe) => {
                this._addStylesToHost(O, pe, K);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((O) => O.forEach(vt));
            }
          }
          return (
            (J.ɵfac = function (O) {
              return new (O || J)(l.LFG(d.K0));
            }),
            (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
            J
          );
        })();
      function vt(J) {
        (0, d.q)().remove(J);
      }
      const Pe = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Oe = /%COMP%/g,
        q = "%COMP%",
        He = `_nghost-${q}`,
        j = `_ngcontent-${q}`;
      function U(J, V, O) {
        for (let K = 0; K < V.length; K++) {
          let pe = V[K];
          Array.isArray(pe)
            ? U(J, pe, O)
            : ((pe = pe.replace(Oe, J)), O.push(pe));
        }
        return O;
      }
      function L(J) {
        return (V) => {
          if ("__ngUnwrap__" === V) return J;
          !1 === J(V) && (V.preventDefault(), (V.returnValue = !1));
        };
      }
      let z = (() => {
        class J {
          constructor(O, K, pe) {
            (this.eventManager = O),
              (this.sharedStylesHost = K),
              (this.appId = pe),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new be(O));
          }
          createRenderer(O, K) {
            if (!O || !K) return this.defaultRenderer;
            switch (K.encapsulation) {
              case l.ifc.Emulated: {
                let pe = this.rendererByCompId.get(K.id);
                return (
                  pe ||
                    ((pe = new Zt(
                      this.eventManager,
                      this.sharedStylesHost,
                      K,
                      this.appId
                    )),
                    this.rendererByCompId.set(K.id, pe)),
                  pe.applyToHost(O),
                  pe
                );
              }
              case 1:
              case l.ifc.ShadowDom:
                return new Ye(this.eventManager, this.sharedStylesHost, O, K);
              default:
                if (!this.rendererByCompId.has(K.id)) {
                  const pe = U(K.id, K.styles, []);
                  this.sharedStylesHost.addStyles(pe),
                    this.rendererByCompId.set(K.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (J.ɵfac = function (O) {
            return new (O || J)(l.LFG(Te), l.LFG(Je), l.LFG(l.AFp));
          }),
          (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
          J
        );
      })();
      class be {
        constructor(V) {
          (this.eventManager = V),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(V, O) {
          return O
            ? document.createElementNS(Pe[O] || O, V)
            : document.createElement(V);
        }
        createComment(V) {
          return document.createComment(V);
        }
        createText(V) {
          return document.createTextNode(V);
        }
        appendChild(V, O) {
          (Xe(V) ? V.content : V).appendChild(O);
        }
        insertBefore(V, O, K) {
          V && (Xe(V) ? V.content : V).insertBefore(O, K);
        }
        removeChild(V, O) {
          V && V.removeChild(O);
        }
        selectRootElement(V, O) {
          let K = "string" == typeof V ? document.querySelector(V) : V;
          if (!K)
            throw new Error(`The selector "${V}" did not match any elements`);
          return O || (K.textContent = ""), K;
        }
        parentNode(V) {
          return V.parentNode;
        }
        nextSibling(V) {
          return V.nextSibling;
        }
        setAttribute(V, O, K, pe) {
          if (pe) {
            O = pe + ":" + O;
            const Ke = Pe[pe];
            Ke ? V.setAttributeNS(Ke, O, K) : V.setAttribute(O, K);
          } else V.setAttribute(O, K);
        }
        removeAttribute(V, O, K) {
          if (K) {
            const pe = Pe[K];
            pe ? V.removeAttributeNS(pe, O) : V.removeAttribute(`${K}:${O}`);
          } else V.removeAttribute(O);
        }
        addClass(V, O) {
          V.classList.add(O);
        }
        removeClass(V, O) {
          V.classList.remove(O);
        }
        setStyle(V, O, K, pe) {
          pe & (l.JOm.DashCase | l.JOm.Important)
            ? V.style.setProperty(O, K, pe & l.JOm.Important ? "important" : "")
            : (V.style[O] = K);
        }
        removeStyle(V, O, K) {
          K & l.JOm.DashCase ? V.style.removeProperty(O) : (V.style[O] = "");
        }
        setProperty(V, O, K) {
          V[O] = K;
        }
        setValue(V, O) {
          V.nodeValue = O;
        }
        listen(V, O, K) {
          return "string" == typeof V
            ? this.eventManager.addGlobalEventListener(V, O, L(K))
            : this.eventManager.addEventListener(V, O, L(K));
        }
      }
      function Xe(J) {
        return "TEMPLATE" === J.tagName && void 0 !== J.content;
      }
      class Zt extends be {
        constructor(V, O, K, pe) {
          super(V), (this.component = K);
          const Ke = U(pe + "-" + K.id, K.styles, []);
          O.addStyles(Ke),
            (this.contentAttr = (function Q(J) {
              return j.replace(Oe, J);
            })(pe + "-" + K.id)),
            (this.hostAttr = (function se(J) {
              return He.replace(Oe, J);
            })(pe + "-" + K.id));
        }
        applyToHost(V) {
          super.setAttribute(V, this.hostAttr, "");
        }
        createElement(V, O) {
          const K = super.createElement(V, O);
          return super.setAttribute(K, this.contentAttr, ""), K;
        }
      }
      class Ye extends be {
        constructor(V, O, K, pe) {
          super(V),
            (this.sharedStylesHost = O),
            (this.hostEl = K),
            (this.shadowRoot = K.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Ke = U(pe.id, pe.styles, []);
          for (let Qe = 0; Qe < Ke.length; Qe++) {
            const gt = document.createElement("style");
            (gt.textContent = Ke[Qe]), this.shadowRoot.appendChild(gt);
          }
        }
        nodeOrShadowRoot(V) {
          return V === this.hostEl ? this.shadowRoot : V;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(V, O) {
          return super.appendChild(this.nodeOrShadowRoot(V), O);
        }
        insertBefore(V, O, K) {
          return super.insertBefore(this.nodeOrShadowRoot(V), O, K);
        }
        removeChild(V, O) {
          return super.removeChild(this.nodeOrShadowRoot(V), O);
        }
        parentNode(V) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(V))
          );
        }
      }
      let yt = (() => {
        class J extends Re {
          constructor(O) {
            super(O);
          }
          supports(O) {
            return !0;
          }
          addEventListener(O, K, pe) {
            return (
              O.addEventListener(K, pe, !1),
              () => this.removeEventListener(O, K, pe)
            );
          }
          removeEventListener(O, K, pe) {
            return O.removeEventListener(K, pe);
          }
        }
        return (
          (J.ɵfac = function (O) {
            return new (O || J)(l.LFG(d.K0));
          }),
          (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
          J
        );
      })();
      const Jt = ["alt", "control", "meta", "shift"],
        bt = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Kt = {
          alt: (J) => J.altKey,
          control: (J) => J.ctrlKey,
          meta: (J) => J.metaKey,
          shift: (J) => J.shiftKey,
        };
      let Ut = (() => {
        class J extends Re {
          constructor(O) {
            super(O);
          }
          supports(O) {
            return null != J.parseEventName(O);
          }
          addEventListener(O, K, pe) {
            const Ke = J.parseEventName(K),
              Qe = J.eventCallback(Ke.fullKey, pe, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, d.q)().onAndCancel(O, Ke.domEventName, Qe)
              );
          }
          static parseEventName(O) {
            const K = O.toLowerCase().split("."),
              pe = K.shift();
            if (0 === K.length || ("keydown" !== pe && "keyup" !== pe))
              return null;
            const Ke = J._normalizeKey(K.pop());
            let Qe = "",
              gt = K.indexOf("code");
            if (
              (gt > -1 && (K.splice(gt, 1), (Qe = "code.")),
              Jt.forEach((et) => {
                const xt = K.indexOf(et);
                xt > -1 && (K.splice(xt, 1), (Qe += et + "."));
              }),
              (Qe += Ke),
              0 != K.length || 0 === Ke.length)
            )
              return null;
            const Ae = {};
            return (Ae.domEventName = pe), (Ae.fullKey = Qe), Ae;
          }
          static matchEventFullKeyCode(O, K) {
            let pe = bt[O.key] || O.key,
              Ke = "";
            return (
              K.indexOf("code.") > -1 && ((pe = O.code), (Ke = "code.")),
              !(null == pe || !pe) &&
                ((pe = pe.toLowerCase()),
                " " === pe ? (pe = "space") : "." === pe && (pe = "dot"),
                Jt.forEach((Qe) => {
                  Qe !== pe && (0, Kt[Qe])(O) && (Ke += Qe + ".");
                }),
                (Ke += pe),
                Ke === K)
            );
          }
          static eventCallback(O, K, pe) {
            return (Ke) => {
              J.matchEventFullKeyCode(Ke, O) && pe.runGuarded(() => K(Ke));
            };
          }
          static _normalizeKey(O) {
            return "esc" === O ? "escape" : O;
          }
        }
        return (
          (J.ɵfac = function (O) {
            return new (O || J)(l.LFG(d.K0));
          }),
          (J.ɵprov = l.Yz7({ token: J, factory: J.ɵfac })),
          J
        );
      })();
      const Se = (0, l.eFA)(l._c5, "browser", [
          { provide: l.Lbi, useValue: d.bD },
          {
            provide: l.g9A,
            useValue: function Be() {
              $.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: d.K0,
            useFactory: function Fe() {
              return (0, l.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        oe = new l.OlP(""),
        ue = [
          {
            provide: l.rWj,
            useClass: class Ee {
              addToWindow(V) {
                (l.dqk.getAngularTestability = (K, pe = !0) => {
                  const Ke = V.findTestabilityInTree(K, pe);
                  if (null == Ke)
                    throw new Error("Could not find testability for element.");
                  return Ke;
                }),
                  (l.dqk.getAllAngularTestabilities = () =>
                    V.getAllTestabilities()),
                  (l.dqk.getAllAngularRootElements = () =>
                    V.getAllRootElements()),
                  l.dqk.frameworkStabilizers ||
                    (l.dqk.frameworkStabilizers = []),
                  l.dqk.frameworkStabilizers.push((K) => {
                    const pe = l.dqk.getAllAngularTestabilities();
                    let Ke = pe.length,
                      Qe = !1;
                    const gt = function (Ae) {
                      (Qe = Qe || Ae), Ke--, 0 == Ke && K(Qe);
                    };
                    pe.forEach(function (Ae) {
                      Ae.whenStable(gt);
                    });
                  });
              }
              findTestabilityInTree(V, O, K) {
                return null == O
                  ? null
                  : V.getTestability(O) ??
                      (K
                        ? (0, d.q)().isShadowRoot(O)
                          ? this.findTestabilityInTree(V, O.host, !0)
                          : this.findTestabilityInTree(V, O.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: l.lri, useClass: l.dDg, deps: [l.R0b, l.eoX, l.rWj] },
          { provide: l.dDg, useClass: l.dDg, deps: [l.R0b, l.eoX, l.rWj] },
        ],
        Et = [
          { provide: l.zSh, useValue: "root" },
          {
            provide: l.qLn,
            useFactory: function W() {
              return new l.qLn();
            },
            deps: [],
          },
          { provide: ae, useClass: yt, multi: !0, deps: [d.K0, l.R0b, l.Lbi] },
          { provide: ae, useClass: Ut, multi: !0, deps: [d.K0] },
          { provide: z, useClass: z, deps: [Te, Je, l.AFp] },
          { provide: l.FYo, useExisting: z },
          { provide: We, useExisting: Je },
          { provide: Je, useClass: Je, deps: [d.K0] },
          { provide: Te, useClass: Te, deps: [ae, l.R0b] },
          { provide: d.JF, useClass: Ie, deps: [] },
          [],
        ];
      let Ht = (() => {
          class J {
            constructor(O) {}
            static withServerTransition(O) {
              return {
                ngModule: J,
                providers: [
                  { provide: l.AFp, useValue: O.appId },
                  { provide: X, useExisting: l.AFp },
                  ie,
                ],
              };
            }
          }
          return (
            (J.ɵfac = function (O) {
              return new (O || J)(l.LFG(oe, 12));
            }),
            (J.ɵmod = l.oAB({ type: J })),
            (J.ɵinj = l.cJS({
              providers: [...Et, ...ue],
              imports: [d.ez, l.hGG],
            })),
            J
          );
        })(),
        me = (() => {
          class J {
            constructor(O) {
              this._doc = O;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(O) {
              this._doc.title = O || "";
            }
          }
          return (
            (J.ɵfac = function (O) {
              return new (O || J)(l.LFG(d.K0));
            }),
            (J.ɵprov = l.Yz7({
              token: J,
              factory: function (O) {
                let K = null;
                return (
                  (K = O
                    ? new O()
                    : (function tn() {
                        return new me((0, l.LFG)(d.K0));
                      })()),
                  K
                );
              },
              providedIn: "root",
            })),
            J
          );
        })();
      typeof window < "u" && window;
    },
    3841: (je, ce, S) => {
      S.d(ce, {
        gz: () => er,
        wm: () => Is,
        F0: () => fn,
        rH: () => $i,
        Bz: () => Hn,
        lC: () => $r,
      });
      var d = S(8256),
        l = S(2076),
        I = S(9646),
        $ = S(1135);
      const he = (0, S(3888).d)(
        (u) =>
          function () {
            u(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var H = S(9751),
        ve = S(4742),
        X = S(4671),
        ye = S(3268),
        ie = S(7669),
        Ee = S(1810),
        Ie = S(5403),
        ae = S(9672);
      function Te(...u) {
        const c = (0, ie.yG)(u),
          s = (0, ie.jO)(u),
          { args: h, keys: y } = (0, ve.D)(u);
        if (0 === h.length) return (0, l.D)([], c);
        const E = new H.y(
          (function Re(u, c, s = X.y) {
            return (h) => {
              We(
                c,
                () => {
                  const { length: y } = u,
                    E = new Array(y);
                  let x = y,
                    N = y;
                  for (let ee = 0; ee < y; ee++)
                    We(
                      c,
                      () => {
                        const xe = (0, l.D)(u[ee], c);
                        let st = !1;
                        xe.subscribe(
                          (0, Ie.x)(
                            h,
                            (ke) => {
                              (E[ee] = ke),
                                st || ((st = !0), N--),
                                N || h.next(s(E.slice()));
                            },
                            () => {
                              --x || h.complete();
                            }
                          )
                        );
                      },
                      h
                    );
                },
                h
              );
            };
          })(h, c, y ? (x) => (0, Ee.n)(y, x) : X.y)
        );
        return s ? E.pipe((0, ye.Z)(s)) : E;
      }
      function We(u, c, s) {
        u ? (0, ae.f)(s, u, c) : c();
      }
      var Je = S(8189);
      function Pe(...u) {
        return (function vt() {
          return (0, Je.J)(1);
        })()((0, l.D)(u, (0, ie.yG)(u)));
      }
      var Oe = S(8421);
      function Me(u) {
        return new H.y((c) => {
          (0, Oe.Xf)(u()).subscribe(c);
        });
      }
      var q = S(9635),
        He = S(576);
      function j(u, c) {
        const s = (0, He.m)(u) ? u : () => u,
          h = (y) => y.error(s());
        return new H.y(c ? (y) => c.schedule(h, 0, y) : h);
      }
      var Q = S(515),
        se = S(727),
        U = S(4482);
      function L() {
        return (0, U.e)((u, c) => {
          let s = null;
          u._refCount++;
          const h = (0, Ie.x)(c, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount)
              return void (s = null);
            const y = u._connection,
              E = s;
            (s = null),
              y && (!E || y === E) && y.unsubscribe(),
              c.unsubscribe();
          });
          u.subscribe(h), h.closed || (s = u.connect());
        });
      }
      class Y extends H.y {
        constructor(c, s) {
          super(),
            (this.source = c),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, U.A)(c) && (this.lift = c.lift);
        }
        _subscribe(c) {
          return this.getSubject().subscribe(c);
        }
        getSubject() {
          const c = this._subject;
          return (
            (!c || c.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: c } = this;
          (this._subject = this._connection = null), c?.unsubscribe();
        }
        connect() {
          let c = this._connection;
          if (!c) {
            c = this._connection = new se.w0();
            const s = this.getSubject();
            c.add(
              this.source.subscribe(
                (0, Ie.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (h) => {
                    this._teardown(), s.error(h);
                  },
                  () => this._teardown()
                )
              )
            ),
              c.closed && ((this._connection = null), (c = se.w0.EMPTY));
          }
          return c;
        }
        refCount() {
          return L()(this);
        }
      }
      var z = S(7579),
        be = S(6895),
        fe = S(4004);
      function $e(u, c) {
        return (0, U.e)((s, h) => {
          let y = null,
            E = 0,
            x = !1;
          const N = () => x && !y && h.complete();
          s.subscribe(
            (0, Ie.x)(
              h,
              (ee) => {
                y?.unsubscribe();
                let xe = 0;
                const st = E++;
                (0, Oe.Xf)(u(ee, st)).subscribe(
                  (y = (0, Ie.x)(
                    h,
                    (ke) => h.next(c ? c(ee, ke, st, xe++) : ke),
                    () => {
                      (y = null), N();
                    }
                  ))
                );
              },
              () => {
                (x = !0), N();
              }
            )
          );
        });
      }
      var Xe = S(5698),
        Ye = S(9300),
        yt = S(5577);
      function Jt(u) {
        return (0, U.e)((c, s) => {
          let h = !1;
          c.subscribe(
            (0, Ie.x)(
              s,
              (y) => {
                (h = !0), s.next(y);
              },
              () => {
                h || s.next(u), s.complete();
              }
            )
          );
        });
      }
      function bt(u = Kt) {
        return (0, U.e)((c, s) => {
          let h = !1;
          c.subscribe(
            (0, Ie.x)(
              s,
              (y) => {
                (h = !0), s.next(y);
              },
              () => (h ? s.complete() : s.error(u()))
            )
          );
        });
      }
      function Kt() {
        return new he();
      }
      function Ut(u, c) {
        const s = arguments.length >= 2;
        return (h) =>
          h.pipe(
            u ? (0, Ye.h)((y, E) => u(y, E, h)) : X.y,
            (0, Xe.q)(1),
            s ? Jt(c) : bt(() => new he())
          );
      }
      var Mt = S(4351),
        ft = S(8505);
      function ot(u) {
        return (0, U.e)((c, s) => {
          let E,
            h = null,
            y = !1;
          (h = c.subscribe(
            (0, Ie.x)(s, void 0, void 0, (x) => {
              (E = (0, Oe.Xf)(u(x, ot(u)(c)))),
                h ? (h.unsubscribe(), (h = null), E.subscribe(s)) : (y = !0);
            })
          )),
            y && (h.unsubscribe(), (h = null), E.subscribe(s));
        });
      }
      function Ln(u, c, s, h, y) {
        return (E, x) => {
          let N = s,
            ee = c,
            xe = 0;
          E.subscribe(
            (0, Ie.x)(
              x,
              (st) => {
                const ke = xe++;
                (ee = N ? u(ee, st, ke) : ((N = !0), st)), h && x.next(ee);
              },
              y &&
                (() => {
                  N && x.next(ee), x.complete();
                })
            )
          );
        };
      }
      function ne(u, c) {
        return (0, U.e)(Ln(u, c, arguments.length >= 2, !0));
      }
      function Be(u) {
        return u <= 0
          ? () => Q.E
          : (0, U.e)((c, s) => {
              let h = [];
              c.subscribe(
                (0, Ie.x)(
                  s,
                  (y) => {
                    h.push(y), u < h.length && h.shift();
                  },
                  () => {
                    for (const y of h) s.next(y);
                    s.complete();
                  },
                  void 0,
                  () => {
                    h = null;
                  }
                )
              );
            });
      }
      function W(u, c) {
        const s = arguments.length >= 2;
        return (h) =>
          h.pipe(
            u ? (0, Ye.h)((y, E) => u(y, E, h)) : X.y,
            Be(1),
            s ? Jt(c) : bt(() => new he())
          );
      }
      function Se(u) {
        return (0, U.e)((c, s) => {
          try {
            c.subscribe(s);
          } finally {
            s.add(u);
          }
        });
      }
      var oe = S(1481);
      const ue = "primary",
        Et = Symbol("RouteTitle");
      class Ht {
        constructor(c) {
          this.params = c || {};
        }
        has(c) {
          return Object.prototype.hasOwnProperty.call(this.params, c);
        }
        get(c) {
          if (this.has(c)) {
            const s = this.params[c];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(c) {
          if (this.has(c)) {
            const s = this.params[c];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Yt(u) {
        return new Ht(u);
      }
      function It(u, c, s) {
        const h = s.path.split("/");
        if (
          h.length > u.length ||
          ("full" === s.pathMatch && (c.hasChildren() || h.length < u.length))
        )
          return null;
        const y = {};
        for (let E = 0; E < h.length; E++) {
          const x = h[E],
            N = u[E];
          if (x.startsWith(":")) y[x.substring(1)] = N;
          else if (x !== N.path) return null;
        }
        return { consumed: u.slice(0, h.length), posParams: y };
      }
      function tn(u, c) {
        const s = u ? Object.keys(u) : void 0,
          h = c ? Object.keys(c) : void 0;
        if (!s || !h || s.length != h.length) return !1;
        let y;
        for (let E = 0; E < s.length; E++)
          if (((y = s[E]), !me(u[y], c[y]))) return !1;
        return !0;
      }
      function me(u, c) {
        if (Array.isArray(u) && Array.isArray(c)) {
          if (u.length !== c.length) return !1;
          const s = [...u].sort(),
            h = [...c].sort();
          return s.every((y, E) => h[E] === y);
        }
        return u === c;
      }
      function P(u) {
        return Array.prototype.concat.apply([], u);
      }
      function F(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function de(u, c) {
        for (const s in u) u.hasOwnProperty(s) && c(u[s], s);
      }
      function Ue(u) {
        return (0, d.CqO)(u)
          ? u
          : (0, d.QGY)(u)
          ? (0, l.D)(Promise.resolve(u))
          : (0, I.of)(u);
      }
      const Ze = {
          exact: function ze(u, c, s) {
            if (
              !jt(u.segments, c.segments) ||
              !lt(u.segments, c.segments, s) ||
              u.numberOfChildren !== c.numberOfChildren
            )
              return !1;
            for (const h in c.children)
              if (!u.children[h] || !ze(u.children[h], c.children[h], s))
                return !1;
            return !0;
          },
          subset: Tt,
        },
        $t = {
          exact: function nn(u, c) {
            return tn(u, c);
          },
          subset: function Vt(u, c) {
            return (
              Object.keys(c).length <= Object.keys(u).length &&
              Object.keys(c).every((s) => me(u[s], c[s]))
            );
          },
          ignored: () => !0,
        };
      function At(u, c, s) {
        return (
          Ze[s.paths](u.root, c.root, s.matrixParams) &&
          $t[s.queryParams](u.queryParams, c.queryParams) &&
          !("exact" === s.fragment && u.fragment !== c.fragment)
        );
      }
      function Tt(u, c, s) {
        return sn(u, c, c.segments, s);
      }
      function sn(u, c, s, h) {
        if (u.segments.length > s.length) {
          const y = u.segments.slice(0, s.length);
          return !(!jt(y, s) || c.hasChildren() || !lt(y, s, h));
        }
        if (u.segments.length === s.length) {
          if (!jt(u.segments, s) || !lt(u.segments, s, h)) return !1;
          for (const y in c.children)
            if (!u.children[y] || !Tt(u.children[y], c.children[y], h))
              return !1;
          return !0;
        }
        {
          const y = s.slice(0, u.segments.length),
            E = s.slice(u.segments.length);
          return (
            !!(jt(u.segments, y) && lt(u.segments, y, h) && u.children[ue]) &&
            sn(u.children[ue], c, E, h)
          );
        }
      }
      function lt(u, c, s) {
        return c.every((h, y) => $t[s](u[y].parameters, h.parameters));
      }
      class Ft {
        constructor(c, s, h) {
          (this.root = c), (this.queryParams = s), (this.fragment = h);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Yt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return ro.serialize(this);
        }
      }
      class tt {
        constructor(c, s) {
          (this.segments = c),
            (this.children = s),
            (this.parent = null),
            de(s, (h, y) => (h.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Zn(this);
        }
      }
      class hn {
        constructor(c, s) {
          (this.path = c), (this.parameters = s);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Yt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return K(this);
        }
      }
      function jt(u, c) {
        return u.length === c.length && u.every((s, h) => s.path === c[h].path);
      }
      let zn = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = d.Yz7({
            token: u,
            factory: function () {
              return new Wn();
            },
            providedIn: "root",
          })),
          u
        );
      })();
      class Wn {
        parse(c) {
          const s = new xn(c);
          return new Ft(
            s.parseRootSegment(),
            s.parseQueryParams(),
            s.parseFragment()
          );
        }
        serialize(c) {
          const s = `/${Yn(c.root, !0)}`,
            h = (function Ke(u) {
              const c = Object.keys(u)
                .map((s) => {
                  const h = u[s];
                  return Array.isArray(h)
                    ? h.map((y) => `${ir(s)}=${ir(y)}`).join("&")
                    : `${ir(s)}=${ir(h)}`;
                })
                .filter((s) => !!s);
              return c.length ? `?${c.join("&")}` : "";
            })(c.queryParams);
          return `${s}${h}${
            "string" == typeof c.fragment
              ? `#${(function _r(u) {
                  return encodeURI(u);
                })(c.fragment)}`
              : ""
          }`;
        }
      }
      const ro = new Wn();
      function Zn(u) {
        return u.segments.map((c) => K(c)).join("/");
      }
      function Yn(u, c) {
        if (!u.hasChildren()) return Zn(u);
        if (c) {
          const s = u.children[ue] ? Yn(u.children[ue], !1) : "",
            h = [];
          return (
            de(u.children, (y, E) => {
              E !== ue && h.push(`${E}:${Yn(y, !1)}`);
            }),
            h.length > 0 ? `${s}(${h.join("//")})` : s
          );
        }
        {
          const s = (function bn(u, c) {
            let s = [];
            return (
              de(u.children, (h, y) => {
                y === ue && (s = s.concat(c(h, y)));
              }),
              de(u.children, (h, y) => {
                y !== ue && (s = s.concat(c(h, y)));
              }),
              s
            );
          })(u, (h, y) =>
            y === ue ? [Yn(u.children[ue], !1)] : [`${y}:${Yn(h, !1)}`]
          );
          return 1 === Object.keys(u.children).length && null != u.children[ue]
            ? `${Zn(u)}/${s[0]}`
            : `${Zn(u)}/(${s.join("//")})`;
        }
      }
      function Vn(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function ir(u) {
        return Vn(u).replace(/%3B/gi, ";");
      }
      function J(u) {
        return Vn(u)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function V(u) {
        return decodeURIComponent(u);
      }
      function O(u) {
        return V(u.replace(/\+/g, "%20"));
      }
      function K(u) {
        return `${J(u.path)}${(function pe(u) {
          return Object.keys(u)
            .map((c) => `;${J(c)}=${J(u[c])}`)
            .join("");
        })(u.parameters)}`;
      }
      const Qe = /^[^\/()?;=#]+/;
      function gt(u) {
        const c = u.match(Qe);
        return c ? c[0] : "";
      }
      const Ae = /^[^=?&#]+/,
        xt = /^[^&#]+/;
      class xn {
        constructor(c) {
          (this.url = c), (this.remaining = c);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new tt([], {})
              : new tt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const c = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(c);
            } while (this.consumeOptional("&"));
          return c;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const c = [];
          for (
            this.peekStartsWith("(") || c.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), c.push(this.parseSegment());
          let s = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (s = this.parseParens(!0)));
          let h = {};
          return (
            this.peekStartsWith("(") && (h = this.parseParens(!1)),
            (c.length > 0 || Object.keys(s).length > 0) &&
              (h[ue] = new tt(c, s)),
            h
          );
        }
        parseSegment() {
          const c = gt(this.remaining);
          if ("" === c && this.peekStartsWith(";")) throw new d.vHH(4009, !1);
          return this.capture(c), new hn(V(c), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const c = {};
          for (; this.consumeOptional(";"); ) this.parseParam(c);
          return c;
        }
        parseParam(c) {
          const s = gt(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = "";
          if (this.consumeOptional("=")) {
            const y = gt(this.remaining);
            y && ((h = y), this.capture(h));
          }
          c[V(s)] = V(h);
        }
        parseQueryParam(c) {
          const s = (function et(u) {
            const c = u.match(Ae);
            return c ? c[0] : "";
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = "";
          if (this.consumeOptional("=")) {
            const x = (function rn(u) {
              const c = u.match(xt);
              return c ? c[0] : "";
            })(this.remaining);
            x && ((h = x), this.capture(h));
          }
          const y = O(s),
            E = O(h);
          if (c.hasOwnProperty(y)) {
            let x = c[y];
            Array.isArray(x) || ((x = [x]), (c[y] = x)), x.push(E);
          } else c[y] = E;
        }
        parseParens(c) {
          const s = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const h = gt(this.remaining),
              y = this.remaining[h.length];
            if ("/" !== y && ")" !== y && ";" !== y) throw new d.vHH(4010, !1);
            let E;
            h.indexOf(":") > -1
              ? ((E = h.slice(0, h.indexOf(":"))),
                this.capture(E),
                this.capture(":"))
              : c && (E = ue);
            const x = this.parseChildren();
            (s[E] = 1 === Object.keys(x).length ? x[ue] : new tt([], x)),
              this.consumeOptional("//");
          }
          return s;
        }
        peekStartsWith(c) {
          return this.remaining.startsWith(c);
        }
        consumeOptional(c) {
          return (
            !!this.peekStartsWith(c) &&
            ((this.remaining = this.remaining.substring(c.length)), !0)
          );
        }
        capture(c) {
          if (!this.consumeOptional(c)) throw new d.vHH(4011, !1);
        }
      }
      function Gt(u) {
        return u.segments.length > 0 ? new tt([], { [ue]: u }) : u;
      }
      function On(u) {
        const c = {};
        for (const h of Object.keys(u.children)) {
          const E = On(u.children[h]);
          (E.segments.length > 0 || E.hasChildren()) && (c[h] = E);
        }
        return (function Nt(u) {
          if (1 === u.numberOfChildren && u.children[ue]) {
            const c = u.children[ue];
            return new tt(u.segments.concat(c.segments), c.children);
          }
          return u;
        })(new tt(u.segments, c));
      }
      function vn(u) {
        return u instanceof Ft;
      }
      function Lr(u, c, s, h, y) {
        if (0 === s.length) return En(c.root, c.root, c.root, h, y);
        const E = (function Kn(u) {
          if ("string" == typeof u[0] && 1 === u.length && "/" === u[0])
            return new ln(!0, 0, u);
          let c = 0,
            s = !1;
          const h = u.reduce((y, E, x) => {
            if ("object" == typeof E && null != E) {
              if (E.outlets) {
                const N = {};
                return (
                  de(E.outlets, (ee, xe) => {
                    N[xe] = "string" == typeof ee ? ee.split("/") : ee;
                  }),
                  [...y, { outlets: N }]
                );
              }
              if (E.segmentPath) return [...y, E.segmentPath];
            }
            return "string" != typeof E
              ? [...y, E]
              : 0 === x
              ? (E.split("/").forEach((N, ee) => {
                  (0 == ee && "." === N) ||
                    (0 == ee && "" === N
                      ? (s = !0)
                      : ".." === N
                      ? c++
                      : "" != N && y.push(N));
                }),
                y)
              : [...y, E];
          }, []);
          return new ln(s, c, h);
        })(s);
        return E.toRoot()
          ? En(c.root, c.root, new tt([], {}), h, y)
          : (function x(ee) {
              const xe = (function Dr(u, c, s, h) {
                  if (u.isAbsolute) return new cr(c.root, !0, 0);
                  if (-1 === h) return new cr(s, s === c.root, 0);
                  return (function Cr(u, c, s) {
                    let h = u,
                      y = c,
                      E = s;
                    for (; E > y; ) {
                      if (((E -= y), (h = h.parent), !h))
                        throw new d.vHH(4005, !1);
                      y = h.segments.length;
                    }
                    return new cr(h, !1, y - E);
                  })(s, h + (Pn(u.commands[0]) ? 0 : 1), u.numberOfDoubleDots);
                })(E, c, u.snapshot?._urlSegment, ee),
                st = xe.processChildren
                  ? wn(xe.segmentGroup, xe.index, E.commands)
                  : qn(xe.segmentGroup, xe.index, E.commands);
              return En(c.root, xe.segmentGroup, st, h, y);
            })(u.snapshot?._lastPathIndex);
      }
      function Pn(u) {
        return (
          "object" == typeof u && null != u && !u.outlets && !u.segmentPath
        );
      }
      function Bt(u) {
        return "object" == typeof u && null != u && u.outlets;
      }
      function En(u, c, s, h, y) {
        let x,
          E = {};
        h &&
          de(h, (ee, xe) => {
            E[xe] = Array.isArray(ee) ? ee.map((st) => `${st}`) : `${ee}`;
          }),
          (x = u === c ? s : Jn(u, c, s));
        const N = Gt(On(x));
        return new Ft(N, E, y);
      }
      function Jn(u, c, s) {
        const h = {};
        return (
          de(u.children, (y, E) => {
            h[E] = y === c ? s : Jn(y, c, s);
          }),
          new tt(u.segments, h)
        );
      }
      class ln {
        constructor(c, s, h) {
          if (
            ((this.isAbsolute = c),
            (this.numberOfDoubleDots = s),
            (this.commands = h),
            c && h.length > 0 && Pn(h[0]))
          )
            throw new d.vHH(4003, !1);
          const y = h.find(Bt);
          if (y && y !== F(h)) throw new d.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class cr {
        constructor(c, s, h) {
          (this.segmentGroup = c), (this.processChildren = s), (this.index = h);
        }
      }
      function qn(u, c, s) {
        if (
          (u || (u = new tt([], {})),
          0 === u.segments.length && u.hasChildren())
        )
          return wn(u, c, s);
        const h = (function oo(u, c, s) {
            let h = 0,
              y = c;
            const E = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; y < u.segments.length; ) {
              if (h >= s.length) return E;
              const x = u.segments[y],
                N = s[h];
              if (Bt(N)) break;
              const ee = `${N}`,
                xe = h < s.length - 1 ? s[h + 1] : null;
              if (y > 0 && void 0 === ee) break;
              if (ee && xe && "object" == typeof xe && void 0 === xe.outlets) {
                if (!un(ee, xe, x)) return E;
                h += 2;
              } else {
                if (!un(ee, {}, x)) return E;
                h++;
              }
              y++;
            }
            return { match: !0, pathIndex: y, commandIndex: h };
          })(u, c, s),
          y = s.slice(h.commandIndex);
        if (h.match && h.pathIndex < u.segments.length) {
          const E = new tt(u.segments.slice(0, h.pathIndex), {});
          return (
            (E.children[ue] = new tt(
              u.segments.slice(h.pathIndex),
              u.children
            )),
            wn(E, 0, y)
          );
        }
        return h.match && 0 === y.length
          ? new tt(u.segments, {})
          : h.match && !u.hasChildren()
          ? Qn(u, c, s)
          : h.match
          ? wn(u, 0, y)
          : Qn(u, c, s);
      }
      function wn(u, c, s) {
        if (0 === s.length) return new tt(u.segments, {});
        {
          const h = (function sr(u) {
              return Bt(u[0]) ? u[0].outlets : { [ue]: u };
            })(s),
            y = {};
          return (
            de(h, (E, x) => {
              "string" == typeof E && (E = [E]),
                null !== E && (y[x] = qn(u.children[x], c, E));
            }),
            de(u.children, (E, x) => {
              void 0 === h[x] && (y[x] = E);
            }),
            new tt(u.segments, y)
          );
        }
      }
      function Qn(u, c, s) {
        const h = u.segments.slice(0, c);
        let y = 0;
        for (; y < s.length; ) {
          const E = s[y];
          if (Bt(E)) {
            const ee = qt(E.outlets);
            return new tt(h, ee);
          }
          if (0 === y && Pn(s[0])) {
            h.push(new hn(u.segments[c].path, qo(s[0]))), y++;
            continue;
          }
          const x = Bt(E) ? E.outlets[ue] : `${E}`,
            N = y < s.length - 1 ? s[y + 1] : null;
          x && N && Pn(N)
            ? (h.push(new hn(x, qo(N))), (y += 2))
            : (h.push(new hn(x, {})), y++);
        }
        return new tt(h, {});
      }
      function qt(u) {
        const c = {};
        return (
          de(u, (s, h) => {
            "string" == typeof s && (s = [s]),
              null !== s && (c[h] = Qn(new tt([], {}), 0, s));
          }),
          c
        );
      }
      function qo(u) {
        const c = {};
        return de(u, (s, h) => (c[h] = `${s}`)), c;
      }
      function un(u, c, s) {
        return u == s.path && tn(c, s.parameters);
      }
      class Qt {
        constructor(c, s) {
          (this.id = c), (this.url = s);
        }
      }
      class io extends Qt {
        constructor(c, s, h = "imperative", y = null) {
          super(c, s),
            (this.type = 0),
            (this.navigationTrigger = h),
            (this.restoredState = y);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class zt extends Qt {
        constructor(c, s, h) {
          super(c, s), (this.urlAfterRedirects = h), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Xn extends Qt {
        constructor(c, s, h, y) {
          super(c, s), (this.reason = h), (this.code = y), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class _n extends Qt {
        constructor(c, s, h, y) {
          super(c, s), (this.error = h), (this.target = y), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Mo extends Qt {
        constructor(c, s, h, y) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = y),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class So extends Qt {
        constructor(c, s, h, y) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = y),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class so extends Qt {
        constructor(c, s, h, y, E) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = y),
            (this.shouldActivate = E),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Qo extends Qt {
        constructor(c, s, h, y) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = y),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Xo extends Qt {
        constructor(c, s, h, y) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = y),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ii {
        constructor(c) {
          (this.route = c), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Ti {
        constructor(c) {
          (this.route = c), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ei {
        constructor(c) {
          (this.snapshot = c), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ti {
        constructor(c) {
          (this.snapshot = c), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ni {
        constructor(c) {
          (this.snapshot = c), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class xi {
        constructor(c) {
          (this.snapshot = c), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ao {
        constructor(c, s, h) {
          (this.routerEvent = c),
            (this.position = s),
            (this.anchor = h),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class ri {
        constructor(c) {
          this._root = c;
        }
        get root() {
          return this._root.value;
        }
        parent(c) {
          const s = this.pathFromRoot(c);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(c) {
          const s = ao(c, this._root);
          return s ? s.children.map((h) => h.value) : [];
        }
        firstChild(c) {
          const s = ao(c, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(c) {
          const s = lo(c, this._root);
          return s.length < 2
            ? []
            : s[s.length - 2].children
                .map((y) => y.value)
                .filter((y) => y !== c);
        }
        pathFromRoot(c) {
          return lo(c, this._root).map((s) => s.value);
        }
      }
      function ao(u, c) {
        if (u === c.value) return c;
        for (const s of c.children) {
          const h = ao(u, s);
          if (h) return h;
        }
        return null;
      }
      function lo(u, c) {
        if (u === c.value) return [c];
        for (const s of c.children) {
          const h = lo(u, s);
          if (h.length) return h.unshift(c), h;
        }
        return [];
      }
      class Mn {
        constructor(c, s) {
          (this.value = c), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function br(u) {
        const c = {};
        return u && u.children.forEach((s) => (c[s.value.outlet] = s)), c;
      }
      class Er extends ri {
        constructor(c, s) {
          super(c), (this.snapshot = s), Br(this, c);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function dr(u, c) {
        const s = (function Vr(u, c) {
            const x = new wr([], {}, {}, "", {}, ue, c, null, u.root, -1, {});
            return new Mr("", new Mn(x, []));
          })(u, c),
          h = new $.X([new hn("", {})]),
          y = new $.X({}),
          E = new $.X({}),
          x = new $.X({}),
          N = new $.X(""),
          ee = new er(h, y, x, N, E, ue, c, s.root);
        return (ee.snapshot = s.root), new Er(new Mn(ee, []), s);
      }
      class er {
        constructor(c, s, h, y, E, x, N, ee) {
          (this.url = c),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = y),
            (this.data = E),
            (this.outlet = x),
            (this.component = N),
            (this.title =
              this.data?.pipe((0, fe.U)((xe) => xe[Et])) ?? (0, I.of)(void 0)),
            (this._futureSnapshot = ee);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, fe.U)((c) => Yt(c)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, fe.U)((c) => Yt(c))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Oi(u, c = "emptyOnly") {
        const s = u.pathFromRoot;
        let h = 0;
        if ("always" !== c)
          for (h = s.length - 1; h >= 1; ) {
            const y = s[h],
              E = s[h - 1];
            if (y.routeConfig && "" === y.routeConfig.path) h--;
            else {
              if (E.component) break;
              h--;
            }
          }
        return (function Un(u) {
          return u.reduce(
            (c, s) => ({
              params: { ...c.params, ...s.params },
              data: { ...c.data, ...s.data },
              resolve: {
                ...s.data,
                ...c.resolve,
                ...s.routeConfig?.data,
                ...s._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(s.slice(h));
      }
      class wr {
        constructor(c, s, h, y, E, x, N, ee, xe, st, ke, kt) {
          (this.url = c),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = y),
            (this.data = E),
            (this.outlet = x),
            (this.component = N),
            (this.title = this.data?.[Et]),
            (this.routeConfig = ee),
            (this._urlSegment = xe),
            (this._lastPathIndex = st),
            (this._correctedLastPathIndex = kt ?? st),
            (this._resolve = ke);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Yt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Yt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((h) => h.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Mr extends ri {
        constructor(c, s) {
          super(s), (this.url = c), Br(this, s);
        }
        toString() {
          return Ur(this._root);
        }
      }
      function Br(u, c) {
        (c.value._routerState = u), c.children.forEach((s) => Br(u, s));
      }
      function Ur(u) {
        const c =
          u.children.length > 0 ? ` { ${u.children.map(Ur).join(", ")} } ` : "";
        return `${u.value}${c}`;
      }
      function uo(u) {
        if (u.snapshot) {
          const c = u.snapshot,
            s = u._futureSnapshot;
          (u.snapshot = s),
            tn(c.queryParams, s.queryParams) ||
              u.queryParams.next(s.queryParams),
            c.fragment !== s.fragment && u.fragment.next(s.fragment),
            tn(c.params, s.params) || u.params.next(s.params),
            (function kr(u, c) {
              if (u.length !== c.length) return !1;
              for (let s = 0; s < u.length; ++s) if (!tn(u[s], c[s])) return !1;
              return !0;
            })(c.url, s.url) || u.url.next(s.url),
            tn(c.data, s.data) || u.data.next(s.data);
        } else
          (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function co(u, c) {
        const s =
          tn(u.params, c.params) &&
          (function mn(u, c) {
            return (
              jt(u, c) && u.every((s, h) => tn(s.parameters, c[h].parameters))
            );
          })(u.url, c.url);
        return (
          s &&
          !(!u.parent != !c.parent) &&
          (!u.parent || co(u.parent, c.parent))
        );
      }
      function jr(u, c, s) {
        if (s && u.shouldReuseRoute(c.value, s.value.snapshot)) {
          const h = s.value;
          h._futureSnapshot = c.value;
          const y = (function oi(u, c, s) {
            return c.children.map((h) => {
              for (const y of s.children)
                if (u.shouldReuseRoute(h.value, y.value.snapshot))
                  return jr(u, h, y);
              return jr(u, h);
            });
          })(u, c, s);
          return new Mn(h, y);
        }
        {
          if (u.shouldAttach(c.value)) {
            const E = u.retrieve(c.value);
            if (null !== E) {
              const x = E.route;
              return (
                (x.value._futureSnapshot = c.value),
                (x.children = c.children.map((N) => jr(u, N))),
                x
              );
            }
          }
          const h = (function fo(u) {
              return new er(
                new $.X(u.url),
                new $.X(u.params),
                new $.X(u.queryParams),
                new $.X(u.fragment),
                new $.X(u.data),
                u.outlet,
                u.component,
                u
              );
            })(c.value),
            y = c.children.map((E) => jr(u, E));
          return new Mn(h, y);
        }
      }
      const cn = "ngNavigationCancelingError";
      function fr(u, c) {
        const { redirectTo: s, navigationBehaviorOptions: h } = vn(c)
            ? { redirectTo: c, navigationBehaviorOptions: void 0 }
            : c,
          y = ho(!1, 0, c);
        return (y.url = s), (y.navigationBehaviorOptions = h), y;
      }
      function ho(u, c, s) {
        const h = new Error("NavigationCancelingError: " + (u || ""));
        return (h[cn] = !0), (h.cancellationCode = c), s && (h.url = s), h;
      }
      function jn(u) {
        return xo(u) && vn(u.url);
      }
      function xo(u) {
        return u && u[cn];
      }
      class Pi {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new ct()),
            (this.attachRef = null);
        }
      }
      let ct = (() => {
        class u {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, h) {
            const y = this.getOrCreateContext(s);
            (y.outlet = h), this.contexts.set(s, y);
          }
          onChildOutletDestroyed(s) {
            const h = this.getContext(s);
            h && ((h.outlet = null), (h.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let h = this.getContext(s);
            return h || ((h = new Pi()), this.contexts.set(s, h)), h;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = d.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          u
        );
      })();
      const Hr = !1;
      let $r = (() => {
        class u {
          constructor(s, h, y, E, x) {
            (this.parentContexts = s),
              (this.location = h),
              (this.changeDetector = E),
              (this.environmentInjector = x),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new d.vpe()),
              (this.deactivateEvents = new d.vpe()),
              (this.attachEvents = new d.vpe()),
              (this.detachEvents = new d.vpe()),
              (this.name = y || ue),
              s.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.getContext(this.name)?.outlet === this &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const s = this.parentContexts.getContext(this.name);
              s &&
                s.route &&
                (s.attachRef
                  ? this.attach(s.attachRef, s.route)
                  : this.activateWith(s.route, s.injector));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new d.vHH(4012, Hr);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new d.vHH(4012, Hr);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new d.vHH(4012, Hr);
            this.location.detach();
            const s = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(s.instance),
              s
            );
          }
          attach(s, h) {
            (this.activated = s),
              (this._activatedRoute = h),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, h) {
            if (this.isActivated) throw new d.vHH(4013, Hr);
            this._activatedRoute = s;
            const y = this.location,
              x = s._futureSnapshot.component,
              N = this.parentContexts.getOrCreateContext(this.name).children,
              ee = new po(s, N, y.injector);
            if (
              h &&
              (function dn(u) {
                return !!u.resolveComponentFactory;
              })(h)
            ) {
              const xe = h.resolveComponentFactory(x);
              this.activated = y.createComponent(xe, y.length, ee);
            } else
              this.activated = y.createComponent(x, {
                index: y.length,
                injector: ee,
                environmentInjector: h ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(
              d.Y36(ct),
              d.Y36(d.s_b),
              d.$8M("name"),
              d.Y36(d.sBO),
              d.Y36(d.lqb)
            );
          }),
          (u.ɵdir = d.lG2({
            type: u,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
          })),
          u
        );
      })();
      class po {
        constructor(c, s, h) {
          (this.route = c), (this.childContexts = s), (this.parent = h);
        }
        get(c, s) {
          return c === er
            ? this.route
            : c === ct
            ? this.childContexts
            : this.parent.get(c, s);
        }
      }
      let Gr = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵcmp = d.Xpm({
            type: u,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [d.jDz],
            decls: 1,
            vars: 0,
            template: function (s, h) {
              1 & s && d._UZ(0, "router-outlet");
            },
            dependencies: [$r],
            encapsulation: 2,
          })),
          u
        );
      })();
      function zr(u, c) {
        return (
          u.providers &&
            !u._injector &&
            (u._injector = (0, d.MMx)(u.providers, c, `Route: ${u.path}`)),
          u._injector ?? c
        );
      }
      function nt(u) {
        const c = u.children && u.children.map(nt),
          s = c ? { ...u, children: c } : { ...u };
        return (
          !s.component &&
            !s.loadComponent &&
            (c || s.loadChildren) &&
            s.outlet &&
            s.outlet !== ue &&
            (s.component = Gr),
          s
        );
      }
      function An(u) {
        return u.outlet || ue;
      }
      function Po(u, c) {
        const s = u.filter((h) => An(h) === c);
        return s.push(...u.filter((h) => An(h) !== c)), s;
      }
      function Zr(u) {
        if (!u) return null;
        if (u.routeConfig?._injector) return u.routeConfig._injector;
        for (let c = u.parent; c; c = c.parent) {
          const s = c.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class Fi {
        constructor(c, s, h, y) {
          (this.routeReuseStrategy = c),
            (this.futureState = s),
            (this.currState = h),
            (this.forwardEvent = y);
        }
        activate(c) {
          const s = this.futureState._root,
            h = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, h, c),
            uo(this.futureState.root),
            this.activateChildRoutes(s, h, c);
        }
        deactivateChildRoutes(c, s, h) {
          const y = br(s);
          c.children.forEach((E) => {
            const x = E.value.outlet;
            this.deactivateRoutes(E, y[x], h), delete y[x];
          }),
            de(y, (E, x) => {
              this.deactivateRouteAndItsChildren(E, h);
            });
        }
        deactivateRoutes(c, s, h) {
          const y = c.value,
            E = s ? s.value : null;
          if (y === E)
            if (y.component) {
              const x = h.getContext(y.outlet);
              x && this.deactivateChildRoutes(c, s, x.children);
            } else this.deactivateChildRoutes(c, s, h);
          else E && this.deactivateRouteAndItsChildren(s, h);
        }
        deactivateRouteAndItsChildren(c, s) {
          c.value.component &&
          this.routeReuseStrategy.shouldDetach(c.value.snapshot)
            ? this.detachAndStoreRouteSubtree(c, s)
            : this.deactivateRouteAndOutlet(c, s);
        }
        detachAndStoreRouteSubtree(c, s) {
          const h = s.getContext(c.value.outlet),
            y = h && c.value.component ? h.children : s,
            E = br(c);
          for (const x of Object.keys(E))
            this.deactivateRouteAndItsChildren(E[x], y);
          if (h && h.outlet) {
            const x = h.outlet.detach(),
              N = h.children.onOutletDeactivated();
            this.routeReuseStrategy.store(c.value.snapshot, {
              componentRef: x,
              route: c,
              contexts: N,
            });
          }
        }
        deactivateRouteAndOutlet(c, s) {
          const h = s.getContext(c.value.outlet),
            y = h && c.value.component ? h.children : s,
            E = br(c);
          for (const x of Object.keys(E))
            this.deactivateRouteAndItsChildren(E[x], y);
          h &&
            h.outlet &&
            (h.outlet.deactivate(),
            h.children.onOutletDeactivated(),
            (h.attachRef = null),
            (h.resolver = null),
            (h.route = null));
        }
        activateChildRoutes(c, s, h) {
          const y = br(s);
          c.children.forEach((E) => {
            this.activateRoutes(E, y[E.value.outlet], h),
              this.forwardEvent(new xi(E.value.snapshot));
          }),
            c.children.length && this.forwardEvent(new ti(c.value.snapshot));
        }
        activateRoutes(c, s, h) {
          const y = c.value,
            E = s ? s.value : null;
          if ((uo(y), y === E))
            if (y.component) {
              const x = h.getOrCreateContext(y.outlet);
              this.activateChildRoutes(c, s, x.children);
            } else this.activateChildRoutes(c, s, h);
          else if (y.component) {
            const x = h.getOrCreateContext(y.outlet);
            if (this.routeReuseStrategy.shouldAttach(y.snapshot)) {
              const N = this.routeReuseStrategy.retrieve(y.snapshot);
              this.routeReuseStrategy.store(y.snapshot, null),
                x.children.onOutletReAttached(N.contexts),
                (x.attachRef = N.componentRef),
                (x.route = N.route.value),
                x.outlet && x.outlet.attach(N.componentRef, N.route.value),
                uo(N.route.value),
                this.activateChildRoutes(c, null, x.children);
            } else {
              const N = Zr(y.snapshot),
                ee = N?.get(d._Vd) ?? null;
              (x.attachRef = null),
                (x.route = y),
                (x.resolver = ee),
                (x.injector = N),
                x.outlet && x.outlet.activateWith(y, x.injector),
                this.activateChildRoutes(c, null, x.children);
            }
          } else this.activateChildRoutes(c, null, h);
        }
      }
      class Fo {
        constructor(c) {
          (this.path = c), (this.route = this.path[this.path.length - 1]);
        }
      }
      class No {
        constructor(c, s) {
          (this.component = c), (this.route = s);
        }
      }
      function Ni(u, c, s) {
        const h = u._root;
        return pr(h, c ? c._root : null, s, [h.value]);
      }
      function ht(u, c) {
        const s = Symbol(),
          h = c.get(u, s);
        return h === s
          ? "function" != typeof u || (0, d.Z0I)(u)
            ? c.get(u)
            : u
          : h;
      }
      function pr(
        u,
        c,
        s,
        h,
        y = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const E = br(c);
        return (
          u.children.forEach((x) => {
            (function ai(
              u,
              c,
              s,
              h,
              y = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const E = u.value,
                x = c ? c.value : null,
                N = s ? s.getContext(u.value.outlet) : null;
              if (x && E.routeConfig === x.routeConfig) {
                const ee = (function D(u, c, s) {
                  if ("function" == typeof s) return s(u, c);
                  switch (s) {
                    case "pathParamsChange":
                      return !jt(u.url, c.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !jt(u.url, c.url) || !tn(u.queryParams, c.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !co(u, c) || !tn(u.queryParams, c.queryParams);
                    default:
                      return !co(u, c);
                  }
                })(x, E, E.routeConfig.runGuardsAndResolvers);
                ee
                  ? y.canActivateChecks.push(new Fo(h))
                  : ((E.data = x.data), (E._resolvedData = x._resolvedData)),
                  pr(u, c, E.component ? (N ? N.children : null) : s, h, y),
                  ee &&
                    N &&
                    N.outlet &&
                    N.outlet.isActivated &&
                    y.canDeactivateChecks.push(new No(N.outlet.component, x));
              } else
                x && _(c, N, y),
                  y.canActivateChecks.push(new Fo(h)),
                  pr(u, null, E.component ? (N ? N.children : null) : s, h, y);
            })(x, E[x.value.outlet], s, h.concat([x.value]), y),
              delete E[x.value.outlet];
          }),
          de(E, (x, N) => _(x, s.getContext(N), y)),
          y
        );
      }
      function _(u, c, s) {
        const h = br(u),
          y = u.value;
        de(h, (E, x) => {
          _(E, y.component ? (c ? c.children.getContext(x) : null) : c, s);
        }),
          s.canDeactivateChecks.push(
            new No(
              y.component && c && c.outlet && c.outlet.isActivated
                ? c.outlet.component
                : null,
              y
            )
          );
      }
      function m(u) {
        return "function" == typeof u;
      }
      function Dn(u) {
        return u instanceof he || "EmptyError" === u?.name;
      }
      const Tr = Symbol("INITIAL_VALUE");
      function nr() {
        return $e((u) =>
          Te(
            u.map((c) =>
              c.pipe(
                (0, Xe.q)(1),
                (function Zt(...u) {
                  const c = (0, ie.yG)(u);
                  return (0, U.e)((s, h) => {
                    (c ? Pe(u, s, c) : Pe(u, s)).subscribe(h);
                  });
                })(Tr)
              )
            )
          ).pipe(
            (0, fe.U)((c) => {
              for (const s of c)
                if (!0 !== s) {
                  if (s === Tr) return Tr;
                  if (!1 === s || s instanceof Ft) return s;
                }
              return !0;
            }),
            (0, Ye.h)((c) => c !== Tr),
            (0, Xe.q)(1)
          )
        );
      }
      function v(u) {
        return (0, q.z)(
          (0, ft.b)((c) => {
            if (vn(c)) throw fr(0, c);
          }),
          (0, fe.U)((c) => !0 === c)
        );
      }
      const R = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function te(u, c, s, h, y) {
        const E = _e(u, c, s);
        return E.matched
          ? (function M(u, c, s, h) {
              const y = c.canMatch;
              if (!y || 0 === y.length) return (0, I.of)(!0);
              const E = y.map((x) => {
                const N = ht(x, u);
                return Ue(
                  (function Ar(u) {
                    return u && m(u.canMatch);
                  })(N)
                    ? N.canMatch(c, s)
                    : u.runInContext(() => N(c, s))
                );
              });
              return (0, I.of)(E).pipe(nr(), v());
            })((h = zr(c, h)), c, s).pipe(
              (0, fe.U)((x) => (!0 === x ? E : { ...R }))
            )
          : (0, I.of)(E);
      }
      function _e(u, c, s) {
        if ("" === c.path)
          return "full" === c.pathMatch && (u.hasChildren() || s.length > 0)
            ? { ...R }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: s,
                parameters: {},
                positionalParamSegments: {},
              };
        const y = (c.matcher || It)(s, u, c);
        if (!y) return { ...R };
        const E = {};
        de(y.posParams, (N, ee) => {
          E[ee] = N.path;
        });
        const x =
          y.consumed.length > 0
            ? { ...E, ...y.consumed[y.consumed.length - 1].parameters }
            : E;
        return {
          matched: !0,
          consumedSegments: y.consumed,
          remainingSegments: s.slice(y.consumed.length),
          parameters: x,
          positionalParamSegments: y.posParams ?? {},
        };
      }
      function Le(u, c, s, h, y = "corrected") {
        if (
          s.length > 0 &&
          (function Pt(u, c, s) {
            return s.some((h) => mt(u, c, h) && An(h) !== ue);
          })(u, s, h)
        ) {
          const x = new tt(
            c,
            (function wt(u, c, s, h) {
              const y = {};
              (y[ue] = h),
                (h._sourceSegment = u),
                (h._segmentIndexShift = c.length);
              for (const E of s)
                if ("" === E.path && An(E) !== ue) {
                  const x = new tt([], {});
                  (x._sourceSegment = u),
                    (x._segmentIndexShift = c.length),
                    (y[An(E)] = x);
                }
              return y;
            })(u, c, h, new tt(s, u.children))
          );
          return (
            (x._sourceSegment = u),
            (x._segmentIndexShift = c.length),
            { segmentGroup: x, slicedSegments: [] }
          );
        }
        if (
          0 === s.length &&
          (function _t(u, c, s) {
            return s.some((h) => mt(u, c, h));
          })(u, s, h)
        ) {
          const x = new tt(
            u.segments,
            (function St(u, c, s, h, y, E) {
              const x = {};
              for (const N of h)
                if (mt(u, s, N) && !y[An(N)]) {
                  const ee = new tt([], {});
                  (ee._sourceSegment = u),
                    (ee._segmentIndexShift =
                      "legacy" === E ? u.segments.length : c.length),
                    (x[An(N)] = ee);
                }
              return { ...y, ...x };
            })(u, c, s, h, u.children, y)
          );
          return (
            (x._sourceSegment = u),
            (x._segmentIndexShift = c.length),
            { segmentGroup: x, slicedSegments: s }
          );
        }
        const E = new tt(u.segments, u.children);
        return (
          (E._sourceSegment = u),
          (E._segmentIndexShift = c.length),
          { segmentGroup: E, slicedSegments: s }
        );
      }
      function mt(u, c, s) {
        return (
          (!(u.hasChildren() || c.length > 0) || "full" !== s.pathMatch) &&
          "" === s.path
        );
      }
      function Ct(u, c, s, h) {
        return (
          !!(An(u) === h || (h !== ue && mt(c, s, u))) &&
          ("**" === u.path || _e(c, u, s).matched)
        );
      }
      function pt(u, c, s) {
        return 0 === c.length && !u.children[s];
      }
      const rr = !1;
      class In {
        constructor(c) {
          this.segmentGroup = c || null;
        }
      }
      class gr {
        constructor(c) {
          this.urlTree = c;
        }
      }
      function Nn(u) {
        return j(new In(u));
      }
      function mo(u) {
        return j(new gr(u));
      }
      class Vi {
        constructor(c, s, h, y, E) {
          (this.injector = c),
            (this.configLoader = s),
            (this.urlSerializer = h),
            (this.urlTree = y),
            (this.config = E),
            (this.allowRedirects = !0);
        }
        apply() {
          const c = Le(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new tt(c.segments, c.children);
          return this.expandSegmentGroup(this.injector, this.config, s, ue)
            .pipe(
              (0, fe.U)((E) =>
                this.createUrlTree(
                  On(E),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              ot((E) => {
                if (E instanceof gr)
                  return (this.allowRedirects = !1), this.match(E.urlTree);
                throw E instanceof In ? this.noMatchError(E) : E;
              })
            );
        }
        match(c) {
          return this.expandSegmentGroup(this.injector, this.config, c.root, ue)
            .pipe(
              (0, fe.U)((y) =>
                this.createUrlTree(On(y), c.queryParams, c.fragment)
              )
            )
            .pipe(
              ot((y) => {
                throw y instanceof In ? this.noMatchError(y) : y;
              })
            );
        }
        noMatchError(c) {
          return new d.vHH(4002, rr);
        }
        createUrlTree(c, s, h) {
          const y = Gt(c);
          return new Ft(y, s, h);
        }
        expandSegmentGroup(c, s, h, y) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.expandChildren(c, s, h).pipe((0, fe.U)((E) => new tt([], E)))
            : this.expandSegment(c, h, s, h.segments, y, !0);
        }
        expandChildren(c, s, h) {
          const y = [];
          for (const E of Object.keys(h.children))
            "primary" === E ? y.unshift(E) : y.push(E);
          return (0, l.D)(y).pipe(
            (0, Mt.b)((E) => {
              const x = h.children[E],
                N = Po(s, E);
              return this.expandSegmentGroup(c, N, x, E).pipe(
                (0, fe.U)((ee) => ({ segment: ee, outlet: E }))
              );
            }),
            ne((E, x) => ((E[x.outlet] = x.segment), E), {}),
            W()
          );
        }
        expandSegment(c, s, h, y, E, x) {
          return (0, l.D)(h).pipe(
            (0, Mt.b)((N) =>
              this.expandSegmentAgainstRoute(c, s, h, N, y, E, x).pipe(
                ot((xe) => {
                  if (xe instanceof In) return (0, I.of)(null);
                  throw xe;
                })
              )
            ),
            Ut((N) => !!N),
            ot((N, ee) => {
              if (Dn(N)) return pt(s, y, E) ? (0, I.of)(new tt([], {})) : Nn(s);
              throw N;
            })
          );
        }
        expandSegmentAgainstRoute(c, s, h, y, E, x, N) {
          return Ct(y, s, E, x)
            ? void 0 === y.redirectTo
              ? this.matchSegmentAgainstRoute(c, s, y, E, x)
              : N && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(c, s, h, y, E, x)
              : Nn(s)
            : Nn(s);
        }
        expandSegmentAgainstRouteUsingRedirect(c, s, h, y, E, x) {
          return "**" === y.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(c, h, y, x)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                c,
                s,
                h,
                y,
                E,
                x
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(c, s, h, y) {
          const E = this.applyRedirectCommands([], h.redirectTo, {});
          return h.redirectTo.startsWith("/")
            ? mo(E)
            : this.lineralizeSegments(h, E).pipe(
                (0, yt.z)((x) => {
                  const N = new tt(x, {});
                  return this.expandSegment(c, N, s, x, y, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(c, s, h, y, E, x) {
          const {
            matched: N,
            consumedSegments: ee,
            remainingSegments: xe,
            positionalParamSegments: st,
          } = _e(s, y, E);
          if (!N) return Nn(s);
          const ke = this.applyRedirectCommands(ee, y.redirectTo, st);
          return y.redirectTo.startsWith("/")
            ? mo(ke)
            : this.lineralizeSegments(y, ke).pipe(
                (0, yt.z)((kt) =>
                  this.expandSegment(c, s, h, kt.concat(xe), x, !1)
                )
              );
        }
        matchSegmentAgainstRoute(c, s, h, y, E) {
          return "**" === h.path
            ? ((c = zr(h, c)),
              h.loadChildren
                ? (h._loadedRoutes
                    ? (0, I.of)({
                        routes: h._loadedRoutes,
                        injector: h._loadedInjector,
                      })
                    : this.configLoader.loadChildren(c, h)
                  ).pipe(
                    (0, fe.U)(
                      (N) => (
                        (h._loadedRoutes = N.routes),
                        (h._loadedInjector = N.injector),
                        new tt(y, {})
                      )
                    )
                  )
                : (0, I.of)(new tt(y, {})))
            : te(s, h, y, c).pipe(
                $e(
                  ({
                    matched: x,
                    consumedSegments: N,
                    remainingSegments: ee,
                  }) =>
                    x
                      ? this.getChildConfig((c = h._injector ?? c), h, y).pipe(
                          (0, yt.z)((st) => {
                            const ke = st.injector ?? c,
                              kt = st.routes,
                              { segmentGroup: Cn, slicedSegments: or } = Le(
                                s,
                                N,
                                ee,
                                kt
                              ),
                              Wo = new tt(Cn.segments, Cn.children);
                            if (0 === or.length && Wo.hasChildren())
                              return this.expandChildren(ke, kt, Wo).pipe(
                                (0, fe.U)((Sl) => new tt(N, Sl))
                              );
                            if (0 === kt.length && 0 === or.length)
                              return (0, I.of)(new tt(N, {}));
                            const Tn = An(h) === E;
                            return this.expandSegment(
                              ke,
                              Wo,
                              kt,
                              or,
                              Tn ? ue : E,
                              !0
                            ).pipe(
                              (0, fe.U)(
                                (Kr) =>
                                  new tt(N.concat(Kr.segments), Kr.children)
                              )
                            );
                          })
                        )
                      : Nn(s)
                )
              );
        }
        getChildConfig(c, s, h) {
          return s.children
            ? (0, I.of)({ routes: s.children, injector: c })
            : s.loadChildren
            ? void 0 !== s._loadedRoutes
              ? (0, I.of)({
                  routes: s._loadedRoutes,
                  injector: s._loadedInjector,
                })
              : (function b(u, c, s, h) {
                  const y = c.canLoad;
                  if (void 0 === y || 0 === y.length) return (0, I.of)(!0);
                  const E = y.map((x) => {
                    const N = ht(x, u);
                    return Ue(
                      (function re(u) {
                        return u && m(u.canLoad);
                      })(N)
                        ? N.canLoad(c, s)
                        : u.runInContext(() => N(c, s))
                    );
                  });
                  return (0, I.of)(E).pipe(nr(), v());
                })(c, s, h).pipe(
                  (0, yt.z)((y) =>
                    y
                      ? this.configLoader.loadChildren(c, s).pipe(
                          (0, ft.b)((E) => {
                            (s._loadedRoutes = E.routes),
                              (s._loadedInjector = E.injector);
                          })
                        )
                      : (function vo(u) {
                          return j(ho(rr, 3));
                        })()
                  )
                )
            : (0, I.of)({ routes: [], injector: c });
        }
        lineralizeSegments(c, s) {
          let h = [],
            y = s.root;
          for (;;) {
            if (((h = h.concat(y.segments)), 0 === y.numberOfChildren))
              return (0, I.of)(h);
            if (y.numberOfChildren > 1 || !y.children[ue])
              return j(new d.vHH(4e3, rr));
            y = y.children[ue];
          }
        }
        applyRedirectCommands(c, s, h) {
          return this.applyRedirectCreateUrlTree(
            s,
            this.urlSerializer.parse(s),
            c,
            h
          );
        }
        applyRedirectCreateUrlTree(c, s, h, y) {
          const E = this.createSegmentGroup(c, s.root, h, y);
          return new Ft(
            E,
            this.createQueryParams(s.queryParams, this.urlTree.queryParams),
            s.fragment
          );
        }
        createQueryParams(c, s) {
          const h = {};
          return (
            de(c, (y, E) => {
              if ("string" == typeof y && y.startsWith(":")) {
                const N = y.substring(1);
                h[E] = s[N];
              } else h[E] = y;
            }),
            h
          );
        }
        createSegmentGroup(c, s, h, y) {
          const E = this.createSegments(c, s.segments, h, y);
          let x = {};
          return (
            de(s.children, (N, ee) => {
              x[ee] = this.createSegmentGroup(c, N, h, y);
            }),
            new tt(E, x)
          );
        }
        createSegments(c, s, h, y) {
          return s.map((E) =>
            E.path.startsWith(":")
              ? this.findPosParam(c, E, y)
              : this.findOrReturn(E, h)
          );
        }
        findPosParam(c, s, h) {
          const y = h[s.path.substring(1)];
          if (!y) throw new d.vHH(4001, rr);
          return y;
        }
        findOrReturn(c, s) {
          let h = 0;
          for (const y of s) {
            if (y.path === c.path) return s.splice(h), y;
            h++;
          }
          return c;
        }
      }
      class al {}
      class ll {
        constructor(c, s, h, y, E, x, N, ee) {
          (this.injector = c),
            (this.rootComponentType = s),
            (this.config = h),
            (this.urlTree = y),
            (this.url = E),
            (this.paramsInheritanceStrategy = x),
            (this.relativeLinkResolution = N),
            (this.urlSerializer = ee);
        }
        recognize() {
          const c = Le(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo),
            this.relativeLinkResolution
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            c,
            ue
          ).pipe(
            (0, fe.U)((s) => {
              if (null === s) return null;
              const h = new wr(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  ue,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                y = new Mn(h, s),
                E = new Mr(this.url, y);
              return this.inheritParamsAndData(E._root), E;
            })
          );
        }
        inheritParamsAndData(c) {
          const s = c.value,
            h = Oi(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(h.params)),
            (s.data = Object.freeze(h.data)),
            c.children.forEach((y) => this.inheritParamsAndData(y));
        }
        processSegmentGroup(c, s, h, y) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.processChildren(c, s, h)
            : this.processSegment(c, s, h, h.segments, y);
        }
        processChildren(c, s, h) {
          return (0, l.D)(Object.keys(h.children)).pipe(
            (0, Mt.b)((y) => {
              const E = h.children[y],
                x = Po(s, y);
              return this.processSegmentGroup(c, x, E, y);
            }),
            ne((y, E) => (y && E ? (y.push(...E), y) : null)),
            (function Fe(u, c = !1) {
              return (0, U.e)((s, h) => {
                let y = 0;
                s.subscribe(
                  (0, Ie.x)(h, (E) => {
                    const x = u(E, y++);
                    (x || c) && h.next(E), !x && h.complete();
                  })
                );
              });
            })((y) => null !== y),
            Jt(null),
            W(),
            (0, fe.U)((y) => {
              if (null === y) return null;
              const E = aa(y);
              return (
                (function ul(u) {
                  u.sort((c, s) =>
                    c.value.outlet === ue
                      ? -1
                      : s.value.outlet === ue
                      ? 1
                      : c.value.outlet.localeCompare(s.value.outlet)
                  );
                })(E),
                E
              );
            })
          );
        }
        processSegment(c, s, h, y, E) {
          return (0, l.D)(s).pipe(
            (0, Mt.b)((x) =>
              this.processSegmentAgainstRoute(x._injector ?? c, x, h, y, E)
            ),
            Ut((x) => !!x),
            ot((x) => {
              if (Dn(x)) return pt(h, y, E) ? (0, I.of)([]) : (0, I.of)(null);
              throw x;
            })
          );
        }
        processSegmentAgainstRoute(c, s, h, y, E) {
          if (s.redirectTo || !Ct(s, h, y, E)) return (0, I.of)(null);
          let x;
          if ("**" === s.path) {
            const N = y.length > 0 ? F(y).parameters : {},
              ee = fl(h) + y.length,
              xe = new wr(
                y,
                N,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Es(s),
                An(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                dl(h),
                ee,
                ws(s),
                ee
              );
            x = (0, I.of)({
              snapshot: xe,
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            x = te(h, s, y, c).pipe(
              (0, fe.U)(
                ({
                  matched: N,
                  consumedSegments: ee,
                  remainingSegments: xe,
                  parameters: st,
                }) => {
                  if (!N) return null;
                  const ke = fl(h) + ee.length;
                  return {
                    snapshot: new wr(
                      ee,
                      st,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      Es(s),
                      An(s),
                      s.component ?? s._loadedComponent ?? null,
                      s,
                      dl(h),
                      ke,
                      ws(s),
                      ke
                    ),
                    consumedSegments: ee,
                    remainingSegments: xe,
                  };
                }
              )
            );
          return x.pipe(
            $e((N) => {
              if (null === N) return (0, I.of)(null);
              const {
                snapshot: ee,
                consumedSegments: xe,
                remainingSegments: st,
              } = N;
              c = s._injector ?? c;
              const ke = s._loadedInjector ?? c,
                kt = (function di(u) {
                  return u.children
                    ? u.children
                    : u.loadChildren
                    ? u._loadedRoutes
                    : [];
                })(s),
                { segmentGroup: Cn, slicedSegments: or } = Le(
                  h,
                  xe,
                  st,
                  kt.filter((Tn) => void 0 === Tn.redirectTo),
                  this.relativeLinkResolution
                );
              if (0 === or.length && Cn.hasChildren())
                return this.processChildren(ke, kt, Cn).pipe(
                  (0, fe.U)((Tn) => (null === Tn ? null : [new Mn(ee, Tn)]))
                );
              if (0 === kt.length && 0 === or.length)
                return (0, I.of)([new Mn(ee, [])]);
              const Wo = An(s) === E;
              return this.processSegment(ke, kt, Cn, or, Wo ? ue : E).pipe(
                (0, fe.U)((Tn) => (null === Tn ? null : [new Mn(ee, Tn)]))
              );
            })
          );
        }
      }
      function bs(u) {
        const c = u.value.routeConfig;
        return c && "" === c.path && void 0 === c.redirectTo;
      }
      function aa(u) {
        const c = [],
          s = new Set();
        for (const h of u) {
          if (!bs(h)) {
            c.push(h);
            continue;
          }
          const y = c.find((E) => h.value.routeConfig === E.value.routeConfig);
          void 0 !== y ? (y.children.push(...h.children), s.add(y)) : c.push(h);
        }
        for (const h of s) {
          const y = aa(h.children);
          c.push(new Mn(h.value, y));
        }
        return c.filter((h) => !s.has(h));
      }
      function dl(u) {
        let c = u;
        for (; c._sourceSegment; ) c = c._sourceSegment;
        return c;
      }
      function fl(u) {
        let c = u,
          s = c._segmentIndexShift ?? 0;
        for (; c._sourceSegment; )
          (c = c._sourceSegment), (s += c._segmentIndexShift ?? 0);
        return s - 1;
      }
      function Es(u) {
        return u.data || {};
      }
      function ws(u) {
        return u.resolve || {};
      }
      function Ui(u) {
        return "string" == typeof u.title || null === u.title;
      }
      function Lo(u) {
        return $e((c) => {
          const s = u(c);
          return s ? (0, l.D)(s).pipe((0, fe.U)(() => c)) : (0, I.of)(c);
        });
      }
      let pl = (() => {
          class u {
            buildTitle(s) {
              let h,
                y = s.root;
              for (; void 0 !== y; )
                (h = this.getResolvedTitleForRoute(y) ?? h),
                  (y = y.children.find((E) => E.outlet === ue));
              return h;
            }
            getResolvedTitleForRoute(s) {
              return s.data[Et];
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = d.Yz7({
              token: u,
              factory: function () {
                return (0, d.f3M)(Ms);
              },
              providedIn: "root",
            })),
            u
          );
        })(),
        Ms = (() => {
          class u extends pl {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const h = this.buildTitle(s);
              void 0 !== h && this.title.setTitle(h);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(d.LFG(oe.Dx));
            }),
            (u.ɵprov = d.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: "root",
            })),
            u
          );
        })();
      class ml {}
      class vl extends class mr {
        shouldDetach(c) {
          return !1;
        }
        store(c, s) {}
        shouldAttach(c) {
          return !1;
        }
        retrieve(c) {
          return null;
        }
        shouldReuseRoute(c, s) {
          return c.routeConfig === s.routeConfig;
        }
      } {}
      const Vo = new d.OlP("", { providedIn: "root", factory: () => ({}) }),
        Bo = new d.OlP("ROUTES");
      let Uo = (() => {
        class u {
          constructor(s, h) {
            (this.injector = s),
              (this.compiler = h),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s))
              return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, I.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const h = Ue(s.loadComponent()).pipe(
                (0, ft.b)((E) => {
                  this.onLoadEndListener && this.onLoadEndListener(s),
                    (s._loadedComponent = E);
                }),
                Se(() => {
                  this.componentLoaders.delete(s);
                })
              ),
              y = new Y(h, () => new z.x()).pipe(L());
            return this.componentLoaders.set(s, y), y;
          }
          loadChildren(s, h) {
            if (this.childrenLoaders.get(h)) return this.childrenLoaders.get(h);
            if (h._loadedRoutes)
              return (0, I.of)({
                routes: h._loadedRoutes,
                injector: h._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(h);
            const E = this.loadModuleFactoryOrRoutes(h.loadChildren).pipe(
                (0, fe.U)((N) => {
                  this.onLoadEndListener && this.onLoadEndListener(h);
                  let ee,
                    xe,
                    st = !1;
                  Array.isArray(N)
                    ? (xe = N)
                    : ((ee = N.create(s).injector),
                      (xe = P(ee.get(Bo, [], d.XFs.Self | d.XFs.Optional))));
                  return { routes: xe.map(nt), injector: ee };
                }),
                Se(() => {
                  this.childrenLoaders.delete(h);
                })
              ),
              x = new Y(E, () => new z.x()).pipe(L());
            return this.childrenLoaders.set(h, x), x;
          }
          loadModuleFactoryOrRoutes(s) {
            return Ue(s()).pipe(
              (0, yt.z)((h) =>
                h instanceof d.YKP || Array.isArray(h)
                  ? (0, I.of)(h)
                  : (0, l.D)(this.compiler.compileModuleAsync(h))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(d.LFG(d.zs3), d.LFG(d.Sil));
          }),
          (u.ɵprov = d.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          u
        );
      })();
      class yl {}
      class ca {
        shouldProcessUrl(c) {
          return !0;
        }
        extract(c) {
          return c;
        }
        merge(c, s) {
          return c;
        }
      }
      function da(u) {
        throw u;
      }
      function fa(u, c, s) {
        return c.parse("/");
      }
      const _l = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Hi = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      function ha() {
        const u = (0, d.f3M)(zn),
          c = (0, d.f3M)(ct),
          s = (0, d.f3M)(be.Ye),
          h = (0, d.f3M)(d.zs3),
          y = (0, d.f3M)(d.Sil),
          E = (0, d.f3M)(Bo, { optional: !0 }) ?? [],
          x = (0, d.f3M)(Vo, { optional: !0 }) ?? {},
          N = (0, d.f3M)(Ms),
          ee = (0, d.f3M)(pl, { optional: !0 }),
          xe = (0, d.f3M)(yl, { optional: !0 }),
          st = (0, d.f3M)(ml, { optional: !0 }),
          ke = new fn(null, u, c, s, h, y, P(E));
        return (
          xe && (ke.urlHandlingStrategy = xe),
          st && (ke.routeReuseStrategy = st),
          (ke.titleStrategy = ee ?? N),
          (function gi(u, c) {
            u.errorHandler && (c.errorHandler = u.errorHandler),
              u.malformedUriErrorHandler &&
                (c.malformedUriErrorHandler = u.malformedUriErrorHandler),
              u.onSameUrlNavigation &&
                (c.onSameUrlNavigation = u.onSameUrlNavigation),
              u.paramsInheritanceStrategy &&
                (c.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
              u.relativeLinkResolution &&
                (c.relativeLinkResolution = u.relativeLinkResolution),
              u.urlUpdateStrategy &&
                (c.urlUpdateStrategy = u.urlUpdateStrategy),
              u.canceledNavigationResolution &&
                (c.canceledNavigationResolution =
                  u.canceledNavigationResolution);
          })(x, ke),
          ke
        );
      }
      let fn = (() => {
        class u {
          constructor(s, h, y, E, x, N, ee) {
            (this.rootComponentType = s),
              (this.urlSerializer = h),
              (this.rootContexts = y),
              (this.location = E),
              (this.config = ee),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new z.x()),
              (this.errorHandler = da),
              (this.malformedUriErrorHandler = fa),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => (0, I.of)(void 0)),
              (this.urlHandlingStrategy = new ca()),
              (this.routeReuseStrategy = new vl()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.configLoader = x.get(Uo)),
              (this.configLoader.onLoadEndListener = (kt) =>
                this.triggerEvent(new Ti(kt))),
              (this.configLoader.onLoadStartListener = (kt) =>
                this.triggerEvent(new Ii(kt))),
              (this.ngModule = x.get(d.h0i)),
              (this.console = x.get(d.c2e));
            const ke = x.get(d.R0b);
            (this.isNgZoneEnabled =
              ke instanceof d.R0b && d.R0b.isInAngularZone()),
              this.resetConfig(ee),
              (this.currentUrlTree = (function Dt() {
                return new Ft(new tt([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = dr(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new $.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            return this.location.getState()?.ɵrouterPageId;
          }
          setupNavigations(s) {
            const h = this.events;
            return s.pipe(
              (0, Ye.h)((y) => 0 !== y.id),
              (0, fe.U)((y) => ({
                ...y,
                extractedUrl: this.urlHandlingStrategy.extract(y.rawUrl),
              })),
              $e((y) => {
                let E = !1,
                  x = !1;
                return (0, I.of)(y).pipe(
                  (0, ft.b)((N) => {
                    this.currentNavigation = {
                      id: N.id,
                      initialUrl: N.rawUrl,
                      extractedUrl: N.extractedUrl,
                      trigger: N.source,
                      extras: N.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? {
                            ...this.lastSuccessfulNavigation,
                            previousNavigation: null,
                          }
                        : null,
                    };
                  }),
                  $e((N) => {
                    const ee = this.browserUrlTree.toString(),
                      xe =
                        !this.navigated ||
                        N.extractedUrl.toString() !== ee ||
                        ee !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || xe) &&
                      this.urlHandlingStrategy.shouldProcessUrl(N.rawUrl)
                    )
                      return (
                        yo(N.source) && (this.browserUrlTree = N.extractedUrl),
                        (0, I.of)(N).pipe(
                          $e((ke) => {
                            const kt = this.transitions.getValue();
                            return (
                              h.next(
                                new io(
                                  ke.id,
                                  this.serializeUrl(ke.extractedUrl),
                                  ke.source,
                                  ke.restoredState
                                )
                              ),
                              kt !== this.transitions.getValue()
                                ? Q.E
                                : Promise.resolve(ke)
                            );
                          }),
                          (function Cs(u, c, s, h) {
                            return $e((y) =>
                              (function Li(u, c, s, h, y) {
                                return new Vi(u, c, s, h, y).apply();
                              })(u, c, s, y.extractedUrl, h).pipe(
                                (0, fe.U)((E) => ({
                                  ...y,
                                  urlAfterRedirects: E,
                                }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, ft.b)((ke) => {
                            (this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: ke.urlAfterRedirects,
                            }),
                              (y.urlAfterRedirects = ke.urlAfterRedirects);
                          }),
                          (function Bi(u, c, s, h, y, E) {
                            return (0, yt.z)((x) =>
                              (function ci(
                                u,
                                c,
                                s,
                                h,
                                y,
                                E,
                                x = "emptyOnly",
                                N = "legacy"
                              ) {
                                return new ll(u, c, s, h, y, x, N, E)
                                  .recognize()
                                  .pipe(
                                    $e((ee) =>
                                      null === ee
                                        ? (function Yr(u) {
                                            return new H.y((c) => c.error(u));
                                          })(new al())
                                        : (0, I.of)(ee)
                                    )
                                  );
                              })(
                                u,
                                c,
                                s,
                                x.urlAfterRedirects,
                                h.serialize(x.urlAfterRedirects),
                                h,
                                y,
                                E
                              ).pipe(
                                (0, fe.U)((N) => ({ ...x, targetSnapshot: N }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.rootComponentType,
                            this.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, ft.b)((ke) => {
                            if (
                              ((y.targetSnapshot = ke.targetSnapshot),
                              "eager" === this.urlUpdateStrategy)
                            ) {
                              if (!ke.extras.skipLocationChange) {
                                const Cn = this.urlHandlingStrategy.merge(
                                  ke.urlAfterRedirects,
                                  ke.rawUrl
                                );
                                this.setBrowserUrl(Cn, ke);
                              }
                              this.browserUrlTree = ke.urlAfterRedirects;
                            }
                            const kt = new Mo(
                              ke.id,
                              this.serializeUrl(ke.extractedUrl),
                              this.serializeUrl(ke.urlAfterRedirects),
                              ke.targetSnapshot
                            );
                            h.next(kt);
                          })
                        )
                      );
                    if (
                      xe &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: kt,
                          extractedUrl: Cn,
                          source: or,
                          restoredState: Wo,
                          extras: Tn,
                        } = N,
                        Wi = new io(kt, this.serializeUrl(Cn), or, Wo);
                      h.next(Wi);
                      const Kr = dr(Cn, this.rootComponentType).snapshot;
                      return (
                        (y = {
                          ...N,
                          targetSnapshot: Kr,
                          urlAfterRedirects: Cn,
                          extras: {
                            ...Tn,
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          },
                        }),
                        (0, I.of)(y)
                      );
                    }
                    return (this.rawUrlTree = N.rawUrl), N.resolve(null), Q.E;
                  }),
                  (0, ft.b)((N) => {
                    const ee = new So(
                      N.id,
                      this.serializeUrl(N.extractedUrl),
                      this.serializeUrl(N.urlAfterRedirects),
                      N.targetSnapshot
                    );
                    this.triggerEvent(ee);
                  }),
                  (0, fe.U)(
                    (N) =>
                      (y = {
                        ...N,
                        guards: Ni(
                          N.targetSnapshot,
                          N.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                  ),
                  (function ar(u, c) {
                    return (0, yt.z)((s) => {
                      const {
                        targetSnapshot: h,
                        currentSnapshot: y,
                        guards: {
                          canActivateChecks: E,
                          canDeactivateChecks: x,
                        },
                      } = s;
                      return 0 === x.length && 0 === E.length
                        ? (0, I.of)({ ...s, guardsResult: !0 })
                        : (function _s(u, c, s, h) {
                            return (0, l.D)(u).pipe(
                              (0, yt.z)((y) =>
                                (function g(u, c, s, h, y) {
                                  const E =
                                    c && c.routeConfig
                                      ? c.routeConfig.canDeactivate
                                      : null;
                                  if (!E || 0 === E.length)
                                    return (0, I.of)(!0);
                                  const x = E.map((N) => {
                                    const ee = Zr(c) ?? y,
                                      xe = ht(N, ee);
                                    return Ue(
                                      (function Fn(u) {
                                        return u && m(u.canDeactivate);
                                      })(xe)
                                        ? xe.canDeactivate(u, c, s, h)
                                        : ee.runInContext(() => xe(u, c, s, h))
                                    ).pipe(Ut());
                                  });
                                  return (0, I.of)(x).pipe(nr());
                                })(y.component, y.route, s, c, h)
                              ),
                              Ut((y) => !0 !== y, !0)
                            );
                          })(x, h, y, u).pipe(
                            (0, yt.z)((N) =>
                              N &&
                              (function A(u) {
                                return "boolean" == typeof u;
                              })(N)
                                ? (function Ds(u, c, s, h) {
                                    return (0, l.D)(c).pipe(
                                      (0, Mt.b)((y) =>
                                        Pe(
                                          (function sa(u, c) {
                                            return (
                                              null !== u && c && c(new ei(u)),
                                              (0, I.of)(!0)
                                            );
                                          })(y.route.parent, h),
                                          (function ia(u, c) {
                                            return (
                                              null !== u && c && c(new ni(u)),
                                              (0, I.of)(!0)
                                            );
                                          })(y.route, h),
                                          (function ki(u, c, s) {
                                            const h = c[c.length - 1],
                                              E = c
                                                .slice(0, c.length - 1)
                                                .reverse()
                                                .map((x) =>
                                                  (function De(u) {
                                                    const c = u.routeConfig
                                                      ? u.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return c && 0 !== c.length
                                                      ? { node: u, guards: c }
                                                      : null;
                                                  })(x)
                                                )
                                                .filter((x) => null !== x)
                                                .map((x) =>
                                                  Me(() => {
                                                    const N = x.guards.map(
                                                      (ee) => {
                                                        const xe =
                                                            Zr(x.node) ?? s,
                                                          st = ht(ee, xe);
                                                        return Ue(
                                                          (function Wt(u) {
                                                            return (
                                                              u &&
                                                              m(
                                                                u.canActivateChild
                                                              )
                                                            );
                                                          })(st)
                                                            ? st.canActivateChild(
                                                                h,
                                                                u
                                                              )
                                                            : xe.runInContext(
                                                                () => st(h, u)
                                                              )
                                                        ).pipe(Ut());
                                                      }
                                                    );
                                                    return (0, I.of)(N).pipe(
                                                      nr()
                                                    );
                                                  })
                                                );
                                            return (0, I.of)(E).pipe(nr());
                                          })(u, y.path, s),
                                          (function Ri(u, c, s) {
                                            const h = c.routeConfig
                                              ? c.routeConfig.canActivate
                                              : null;
                                            if (!h || 0 === h.length)
                                              return (0, I.of)(!0);
                                            const y = h.map((E) =>
                                              Me(() => {
                                                const x = Zr(c) ?? s,
                                                  N = ht(E, x);
                                                return Ue(
                                                  (function Ge(u) {
                                                    return (
                                                      u && m(u.canActivate)
                                                    );
                                                  })(N)
                                                    ? N.canActivate(c, u)
                                                    : x.runInContext(() =>
                                                        N(c, u)
                                                      )
                                                ).pipe(Ut());
                                              })
                                            );
                                            return (0, I.of)(y).pipe(nr());
                                          })(u, y.route, s)
                                        )
                                      ),
                                      Ut((y) => !0 !== y, !0)
                                    );
                                  })(h, E, u, c)
                                : (0, I.of)(N)
                            ),
                            (0, fe.U)((N) => ({ ...s, guardsResult: N }))
                          );
                    });
                  })(this.ngModule.injector, (N) => this.triggerEvent(N)),
                  (0, ft.b)((N) => {
                    if (((y.guardsResult = N.guardsResult), vn(N.guardsResult)))
                      throw fr(0, N.guardsResult);
                    const ee = new so(
                      N.id,
                      this.serializeUrl(N.extractedUrl),
                      this.serializeUrl(N.urlAfterRedirects),
                      N.targetSnapshot,
                      !!N.guardsResult
                    );
                    this.triggerEvent(ee);
                  }),
                  (0, Ye.h)(
                    (N) =>
                      !!N.guardsResult ||
                      (this.restoreHistory(N),
                      this.cancelNavigationTransition(N, "", 3),
                      !1)
                  ),
                  Lo((N) => {
                    if (N.guards.canActivateChecks.length)
                      return (0, I.of)(N).pipe(
                        (0, ft.b)((ee) => {
                          const xe = new Qo(
                            ee.id,
                            this.serializeUrl(ee.extractedUrl),
                            this.serializeUrl(ee.urlAfterRedirects),
                            ee.targetSnapshot
                          );
                          this.triggerEvent(xe);
                        }),
                        $e((ee) => {
                          let xe = !1;
                          return (0, I.of)(ee).pipe(
                            (function la(u, c) {
                              return (0, yt.z)((s) => {
                                const {
                                  targetSnapshot: h,
                                  guards: { canActivateChecks: y },
                                } = s;
                                if (!y.length) return (0, I.of)(s);
                                let E = 0;
                                return (0, l.D)(y).pipe(
                                  (0, Mt.b)((x) =>
                                    (function ua(u, c, s, h) {
                                      const y = u.routeConfig,
                                        E = u._resolve;
                                      return (
                                        void 0 !== y?.title &&
                                          !Ui(y) &&
                                          (E[Et] = y.title),
                                        (function Ro(u, c, s, h) {
                                          const y = (function hl(u) {
                                            return [
                                              ...Object.keys(u),
                                              ...Object.getOwnPropertySymbols(
                                                u
                                              ),
                                            ];
                                          })(u);
                                          if (0 === y.length)
                                            return (0, I.of)({});
                                          const E = {};
                                          return (0, l.D)(y).pipe(
                                            (0, yt.z)((x) =>
                                              (function ko(u, c, s, h) {
                                                const y = Zr(c) ?? h,
                                                  E = ht(u, y);
                                                return Ue(
                                                  E.resolve
                                                    ? E.resolve(c, s)
                                                    : y.runInContext(() =>
                                                        E(c, s)
                                                      )
                                                );
                                              })(u[x], c, s, h).pipe(
                                                Ut(),
                                                (0, ft.b)((N) => {
                                                  E[x] = N;
                                                })
                                              )
                                            ),
                                            Be(1),
                                            (function B(u) {
                                              return (0, fe.U)(() => u);
                                            })(E),
                                            ot((x) => (Dn(x) ? Q.E : j(x)))
                                          );
                                        })(E, u, c, h).pipe(
                                          (0, fe.U)(
                                            (x) => (
                                              (u._resolvedData = x),
                                              (u.data = Oi(u, s).resolve),
                                              y &&
                                                Ui(y) &&
                                                (u.data[Et] = y.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(x.route, h, u, c)
                                  ),
                                  (0, ft.b)(() => E++),
                                  Be(1),
                                  (0, yt.z)((x) =>
                                    E === y.length ? (0, I.of)(s) : Q.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, ft.b)({
                              next: () => (xe = !0),
                              complete: () => {
                                xe ||
                                  (this.restoreHistory(ee),
                                  this.cancelNavigationTransition(ee, "", 2));
                              },
                            })
                          );
                        }),
                        (0, ft.b)((ee) => {
                          const xe = new Xo(
                            ee.id,
                            this.serializeUrl(ee.extractedUrl),
                            this.serializeUrl(ee.urlAfterRedirects),
                            ee.targetSnapshot
                          );
                          this.triggerEvent(xe);
                        })
                      );
                  }),
                  Lo((N) => {
                    const ee = (xe) => {
                      const st = [];
                      xe.routeConfig?.loadComponent &&
                        !xe.routeConfig._loadedComponent &&
                        st.push(
                          this.configLoader.loadComponent(xe.routeConfig).pipe(
                            (0, ft.b)((ke) => {
                              xe.component = ke;
                            }),
                            (0, fe.U)(() => {})
                          )
                        );
                      for (const ke of xe.children) st.push(...ee(ke));
                      return st;
                    };
                    return Te(ee(N.targetSnapshot.root)).pipe(
                      Jt(),
                      (0, Xe.q)(1)
                    );
                  }),
                  Lo(() => this.afterPreactivation()),
                  (0, fe.U)((N) => {
                    const ee = (function To(u, c, s) {
                      const h = jr(u, c._root, s ? s._root : void 0);
                      return new Er(h, c);
                    })(
                      this.routeReuseStrategy,
                      N.targetSnapshot,
                      N.currentRouterState
                    );
                    return (y = { ...N, targetRouterState: ee });
                  }),
                  (0, ft.b)((N) => {
                    (this.currentUrlTree = N.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        N.urlAfterRedirects,
                        N.rawUrl
                      )),
                      (this.routerState = N.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (N.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, N),
                        (this.browserUrlTree = N.urlAfterRedirects));
                  }),
                  ((u, c, s) =>
                    (0, fe.U)(
                      (h) => (
                        new Fi(
                          c,
                          h.targetRouterState,
                          h.currentRouterState,
                          s
                        ).activate(u),
                        h
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (N) =>
                    this.triggerEvent(N)
                  ),
                  (0, ft.b)({
                    next() {
                      E = !0;
                    },
                    complete() {
                      E = !0;
                    },
                  }),
                  Se(() => {
                    E || x || this.cancelNavigationTransition(y, "", 1),
                      this.currentNavigation?.id === y.id &&
                        (this.currentNavigation = null);
                  }),
                  ot((N) => {
                    if (((x = !0), xo(N))) {
                      jn(N) ||
                        ((this.navigated = !0), this.restoreHistory(y, !0));
                      const ee = new Xn(
                        y.id,
                        this.serializeUrl(y.extractedUrl),
                        N.message,
                        N.cancellationCode
                      );
                      if ((h.next(ee), jn(N))) {
                        const xe = this.urlHandlingStrategy.merge(
                            N.url,
                            this.rawUrlTree
                          ),
                          st = {
                            skipLocationChange: y.extras.skipLocationChange,
                            replaceUrl:
                              "eager" === this.urlUpdateStrategy ||
                              yo(y.source),
                          };
                        this.scheduleNavigation(xe, "imperative", null, st, {
                          resolve: y.resolve,
                          reject: y.reject,
                          promise: y.promise,
                        });
                      } else y.resolve(!1);
                    } else {
                      this.restoreHistory(y, !0);
                      const ee = new _n(
                        y.id,
                        this.serializeUrl(y.extractedUrl),
                        N,
                        y.targetSnapshot ?? void 0
                      );
                      h.next(ee);
                      try {
                        y.resolve(this.errorHandler(N));
                      } catch (xe) {
                        y.reject(xe);
                      }
                    }
                    return Q.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(s) {
            (this.rootComponentType = s),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(s) {
            this.transitions.next({ ...this.transitions.value, ...s });
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((s) => {
                const h = "popstate" === s.type ? "popstate" : "hashchange";
                "popstate" === h &&
                  setTimeout(() => {
                    const y = { replaceUrl: !0 },
                      E = s.state?.navigationId ? s.state : null;
                    if (E) {
                      const N = { ...E };
                      delete N.navigationId,
                        delete N.ɵrouterPageId,
                        0 !== Object.keys(N).length && (y.state = N);
                    }
                    const x = this.parseUrl(s.url);
                    this.scheduleNavigation(x, h, E, y);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(s) {
            this.events.next(s);
          }
          resetConfig(s) {
            (this.config = s.map(nt)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(s, h = {}) {
            const {
                relativeTo: y,
                queryParams: E,
                fragment: x,
                queryParamsHandling: N,
                preserveFragment: ee,
              } = h,
              xe = y || this.routerState.root,
              st = ee ? this.currentUrlTree.fragment : x;
            let ke = null;
            switch (N) {
              case "merge":
                ke = { ...this.currentUrlTree.queryParams, ...E };
                break;
              case "preserve":
                ke = this.currentUrlTree.queryParams;
                break;
              default:
                ke = E || null;
            }
            return (
              null !== ke && (ke = this.removeEmptyProps(ke)),
              Lr(xe, this.currentUrlTree, s, ke, st ?? null)
            );
          }
          navigateByUrl(s, h = { skipLocationChange: !1 }) {
            const y = vn(s) ? s : this.parseUrl(s),
              E = this.urlHandlingStrategy.merge(y, this.rawUrlTree);
            return this.scheduleNavigation(E, "imperative", null, h);
          }
          navigate(s, h = { skipLocationChange: !1 }) {
            return (
              (function pa(u) {
                for (let c = 0; c < u.length; c++) {
                  if (null == u[c]) throw new d.vHH(4008, false);
                }
              })(s),
              this.navigateByUrl(this.createUrlTree(s, h), h)
            );
          }
          serializeUrl(s) {
            return this.urlSerializer.serialize(s);
          }
          parseUrl(s) {
            let h;
            try {
              h = this.urlSerializer.parse(s);
            } catch (y) {
              h = this.malformedUriErrorHandler(y, this.urlSerializer, s);
            }
            return h;
          }
          isActive(s, h) {
            let y;
            if (((y = !0 === h ? { ..._l } : !1 === h ? { ...Hi } : h), vn(s)))
              return At(this.currentUrlTree, s, y);
            const E = this.parseUrl(s);
            return At(this.currentUrlTree, E, y);
          }
          removeEmptyProps(s) {
            return Object.keys(s).reduce((h, y) => {
              const E = s[y];
              return null != E && (h[y] = E), h;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (s) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = s.id),
                  (this.currentPageId = s.targetPageId),
                  this.events.next(
                    new zt(
                      s.id,
                      this.serializeUrl(s.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  this.titleStrategy?.updateTitle(this.routerState.snapshot),
                  s.resolve(!0);
              },
              (s) => {
                this.console.warn(`Unhandled Navigation Error: ${s}`);
              }
            );
          }
          scheduleNavigation(s, h, y, E, x) {
            if (this.disposed) return Promise.resolve(!1);
            let N, ee, xe;
            x
              ? ((N = x.resolve), (ee = x.reject), (xe = x.promise))
              : (xe = new Promise((kt, Cn) => {
                  (N = kt), (ee = Cn);
                }));
            const st = ++this.navigationId;
            let ke;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (y = this.location.getState()),
                  (ke =
                    y && y.ɵrouterPageId
                      ? y.ɵrouterPageId
                      : E.replaceUrl || E.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (ke = 0),
              this.setTransition({
                id: st,
                targetPageId: ke,
                source: h,
                restoredState: y,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: s,
                extras: E,
                resolve: N,
                reject: ee,
                promise: xe,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              xe.catch((kt) => Promise.reject(kt))
            );
          }
          setBrowserUrl(s, h) {
            const y = this.urlSerializer.serialize(s),
              E = {
                ...h.extras.state,
                ...this.generateNgRouterState(h.id, h.targetPageId),
              };
            this.location.isCurrentPathEqualTo(y) || h.extras.replaceUrl
              ? this.location.replaceState(y, "", E)
              : this.location.go(y, "", E);
          }
          restoreHistory(s, h = !1) {
            if ("computed" === this.canceledNavigationResolution) {
              const y = this.currentPageId - s.targetPageId;
              ("popstate" !== s.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === y
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === y &&
                  (this.resetState(s),
                  (this.browserUrlTree = s.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(y);
            } else
              "replace" === this.canceledNavigationResolution &&
                (h && this.resetState(s), this.resetUrlToCurrentUrlTree());
          }
          resetState(s) {
            (this.routerState = s.currentRouterState),
              (this.currentUrlTree = s.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                s.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(s, h, y) {
            const E = new Xn(s.id, this.serializeUrl(s.extractedUrl), h, y);
            this.triggerEvent(E), s.resolve(!1);
          }
          generateNgRouterState(s, h) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: s, ɵrouterPageId: h }
              : { navigationId: s };
          }
        }
        return (
          (u.ɵfac = function (s) {
            d.$Z();
          }),
          (u.ɵprov = d.Yz7({
            token: u,
            factory: function () {
              return ha();
            },
            providedIn: "root",
          })),
          u
        );
      })();
      function yo(u) {
        return "imperative" !== u;
      }
      let $i = (() => {
        class u {
          constructor(s, h, y, E, x) {
            (this.router = s),
              (this.route = h),
              (this.tabIndexAttribute = y),
              (this.renderer = E),
              (this.el = x),
              (this._preserveFragment = !1),
              (this._skipLocationChange = !1),
              (this._replaceUrl = !1),
              (this.commands = null),
              (this.onChanges = new z.x()),
              this.setTabIndexIfNotOnNativeEl("0");
          }
          set preserveFragment(s) {
            this._preserveFragment = (0, d.D6c)(s);
          }
          get preserveFragment() {
            return this._preserveFragment;
          }
          set skipLocationChange(s) {
            this._skipLocationChange = (0, d.D6c)(s);
          }
          get skipLocationChange() {
            return this._skipLocationChange;
          }
          set replaceUrl(s) {
            this._replaceUrl = (0, d.D6c)(s);
          }
          get replaceUrl() {
            return this._replaceUrl;
          }
          setTabIndexIfNotOnNativeEl(s) {
            if (null != this.tabIndexAttribute) return;
            const h = this.renderer,
              y = this.el.nativeElement;
            null !== s
              ? h.setAttribute(y, "tabindex", s)
              : h.removeAttribute(y, "tabindex");
          }
          ngOnChanges(s) {
            this.onChanges.next(this);
          }
          set routerLink(s) {
            null != s
              ? ((this.commands = Array.isArray(s) ? s : [s]),
                this.setTabIndexIfNotOnNativeEl("0"))
              : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
          }
          onClick() {
            return (
              null === this.urlTree ||
                this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
              !0
            );
          }
          get urlTree() {
            return null === this.commands
              ? null
              : this.router.createUrlTree(this.commands, {
                  relativeTo:
                    void 0 !== this.relativeTo ? this.relativeTo : this.route,
                  queryParams: this.queryParams,
                  fragment: this.fragment,
                  queryParamsHandling: this.queryParamsHandling,
                  preserveFragment: this.preserveFragment,
                });
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(
              d.Y36(fn),
              d.Y36(er),
              d.$8M("tabindex"),
              d.Y36(d.Qsj),
              d.Y36(d.SBq)
            );
          }),
          (u.ɵdir = d.lG2({
            type: u,
            selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
            hostBindings: function (s, h) {
              1 & s &&
                d.NdJ("click", function () {
                  return h.onClick();
                });
            },
            inputs: {
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              state: "state",
              relativeTo: "relativeTo",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              routerLink: "routerLink",
            },
            standalone: !0,
            features: [d.TTD],
          })),
          u
        );
      })();
      class As {}
      let Is = (() => {
          class u {
            preload(s, h) {
              return h().pipe(ot(() => (0, I.of)(null)));
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = d.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: "root",
            })),
            u
          );
        })(),
        jo = (() => {
          class u {
            constructor(s, h, y, E, x) {
              (this.router = s),
                (this.injector = y),
                (this.preloadingStrategy = E),
                (this.loader = x);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, Ye.h)((s) => s instanceof zt),
                  (0, Mt.b)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(s, h) {
              const y = [];
              for (const E of h) {
                E.providers &&
                  !E._injector &&
                  (E._injector = (0, d.MMx)(
                    E.providers,
                    s,
                    `Route: ${E.path}`
                  ));
                const x = E._injector ?? s,
                  N = E._loadedInjector ?? x;
                (E.loadChildren && !E._loadedRoutes && void 0 === E.canLoad) ||
                (E.loadComponent && !E._loadedComponent)
                  ? y.push(this.preloadConfig(x, E))
                  : (E.children || E._loadedRoutes) &&
                    y.push(
                      this.processRoutes(N, E.children ?? E._loadedRoutes)
                    );
              }
              return (0, l.D)(y).pipe((0, Je.J)());
            }
            preloadConfig(s, h) {
              return this.preloadingStrategy.preload(h, () => {
                let y;
                y =
                  h.loadChildren && void 0 === h.canLoad
                    ? this.loader.loadChildren(s, h)
                    : (0, I.of)(null);
                const E = y.pipe(
                  (0, yt.z)((x) =>
                    null === x
                      ? (0, I.of)(void 0)
                      : ((h._loadedRoutes = x.routes),
                        (h._loadedInjector = x.injector),
                        this.processRoutes(x.injector ?? s, x.routes))
                  )
                );
                if (h.loadComponent && !h._loadedComponent) {
                  const x = this.loader.loadComponent(h);
                  return (0, l.D)([E, x]).pipe((0, Je.J)());
                }
                return E;
              });
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(
                d.LFG(fn),
                d.LFG(d.Sil),
                d.LFG(d.lqb),
                d.LFG(As),
                d.LFG(Uo)
              );
            }),
            (u.ɵprov = d.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: "root",
            })),
            u
          );
        })();
      const Jr = new d.OlP("");
      let Ts = (() => {
        class u {
          constructor(s, h, y = {}) {
            (this.router = s),
              (this.viewportScroller = h),
              (this.options = y),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (y.scrollPositionRestoration =
                y.scrollPositionRestoration || "disabled"),
              (y.anchorScrolling = y.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.router.events.subscribe((s) => {
              s instanceof io
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = s.navigationTrigger),
                  (this.restoredId = s.restoredState
                    ? s.restoredState.navigationId
                    : 0))
                : s instanceof zt &&
                  ((this.lastId = s.id),
                  this.scheduleScrollEvent(
                    s,
                    this.router.parseUrl(s.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.router.events.subscribe((s) => {
              s instanceof Ao &&
                (s.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(s.position)
                  : s.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(s.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(s, h) {
            this.router.triggerEvent(
              new Ao(
                s,
                "popstate" === this.lastSource
                  ? this.store[this.restoredId]
                  : null,
                h
              )
            );
          }
          ngOnDestroy() {
            this.routerEventsSubscription &&
              this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription &&
                this.scrollEventsSubscription.unsubscribe();
          }
        }
        return (
          (u.ɵfac = function (s) {
            d.$Z();
          }),
          (u.ɵprov = d.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function $o(u, c) {
        return { ɵkind: u, ɵproviders: c };
      }
      function Rt(u) {
        return [{ provide: Bo, multi: !0, useValue: u }];
      }
      function bl() {
        const u = (0, d.f3M)(d.zs3);
        return (c) => {
          const s = u.get(d.z2F);
          if (c !== s.components[0]) return;
          const h = u.get(fn),
            y = u.get(El);
          1 === u.get(ga) && h.initialNavigation(),
            u.get(Go, null, d.XFs.Optional)?.setUpPreloading(),
            u.get(Jr, null, d.XFs.Optional)?.init(),
            h.resetRootComponentType(s.componentTypes[0]),
            y.next(),
            y.complete();
        };
      }
      const El = new d.OlP("", { factory: () => new z.x() }),
        ga = new d.OlP("", { providedIn: "root", factory: () => 1 });
      const Go = new d.OlP("");
      function zc(u) {
        return $o(0, [
          { provide: Go, useExisting: jo },
          { provide: As, useExisting: u },
        ]);
      }
      const zo = new d.OlP("ROUTER_FORROOT_GUARD"),
        Wc = [
          be.Ye,
          { provide: zn, useClass: Wn },
          { provide: fn, useFactory: ha },
          ct,
          {
            provide: er,
            useFactory: function Cl(u) {
              return u.routerState.root;
            },
            deps: [fn],
          },
          Uo,
        ];
      function wl() {
        return new d.PXZ("Router", fn);
      }
      let Hn = (() => {
        class u {
          constructor(s) {}
          static forRoot(s, h) {
            return {
              ngModule: u,
              providers: [
                Wc,
                [],
                Rt(s),
                {
                  provide: zo,
                  useFactory: yi,
                  deps: [[fn, new d.FiY(), new d.tp0()]],
                },
                { provide: Vo, useValue: h || {} },
                h?.useHash
                  ? { provide: be.S$, useClass: be.Do }
                  : { provide: be.S$, useClass: be.b0 },
                {
                  provide: Jr,
                  useFactory: () => {
                    const u = (0, d.f3M)(fn),
                      c = (0, d.f3M)(be.EM),
                      s = (0, d.f3M)(Vo);
                    return (
                      s.scrollOffset && c.setOffset(s.scrollOffset),
                      new Ts(u, c, s)
                    );
                  },
                },
                h?.preloadingStrategy
                  ? zc(h.preloadingStrategy).ɵproviders
                  : [],
                { provide: d.PXZ, multi: !0, useFactory: wl },
                h?.initialNavigation ? ya(h) : [],
                [
                  { provide: _a, useFactory: bl },
                  { provide: d.tb, multi: !0, useExisting: _a },
                ],
              ],
            };
          }
          static forChild(s) {
            return { ngModule: u, providers: [Rt(s)] };
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(d.LFG(zo, 8));
          }),
          (u.ɵmod = d.oAB({ type: u })),
          (u.ɵinj = d.cJS({ imports: [Gr] })),
          u
        );
      })();
      function yi(u) {
        return "guarded";
      }
      function ya(u) {
        return [
          "disabled" === u.initialNavigation
            ? $o(3, [
                {
                  provide: d.ip1,
                  multi: !0,
                  useFactory: () => {
                    const c = (0, d.f3M)(fn);
                    return () => {
                      c.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: ga, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === u.initialNavigation
            ? $o(2, [
                { provide: ga, useValue: 0 },
                {
                  provide: d.ip1,
                  multi: !0,
                  deps: [d.zs3],
                  useFactory: (c) => {
                    const s = c.get(be.V_, Promise.resolve());
                    let h = !1;
                    return () =>
                      s.then(
                        () =>
                          new Promise((E) => {
                            const x = c.get(fn),
                              N = c.get(El);
                            (function y(E) {
                              c.get(fn)
                                .events.pipe(
                                  (0, Ye.h)(
                                    (N) =>
                                      N instanceof zt ||
                                      N instanceof Xn ||
                                      N instanceof _n
                                  ),
                                  (0, fe.U)(
                                    (N) =>
                                      N instanceof zt ||
                                      (N instanceof Xn &&
                                        (0 === N.code || 1 === N.code) &&
                                        null)
                                  ),
                                  (0, Ye.h)((N) => null !== N),
                                  (0, Xe.q)(1)
                                )
                                .subscribe(() => {
                                  E();
                                });
                            })(() => {
                              E(!0), (h = !0);
                            }),
                              (x.afterPreactivation = () => (
                                E(!0), h || N.closed ? (0, I.of)(void 0) : N
                              )),
                              x.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const _a = new d.OlP("");
    },
  },
  (je) => {
    je((je.s = 2684));
  },
]);
