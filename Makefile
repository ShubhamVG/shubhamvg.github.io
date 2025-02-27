source_files := lib/ web/

build/jaspr/: $(source_files)
	jaspr build

.PHONY: github_push
github_push: build/
	rm -rf docs/ && \
	mv build/jaspr/ docs/ && \
	rmdir build && \
	git add . && \
	git commit -m "Another build" && \
	git push