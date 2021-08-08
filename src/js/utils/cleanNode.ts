function cleanNode($node: Element | null) {
	if ($node) $node.innerHTML = '';
}

export default cleanNode;
